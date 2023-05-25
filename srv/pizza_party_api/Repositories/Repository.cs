using Microsoft.EntityFrameworkCore;
using pizza_party_api.Database;

namespace pizza_party_api.Repositories;

public class Repository<TEntity> : IRepository<TEntity> where TEntity : class
{
    protected readonly PizzaShopDbContext _dbContext;
    protected readonly DbSet<TEntity> _dbSet;

    public Repository(PizzaShopDbContext dbContext)
    {
        _dbContext = dbContext;
        _dbSet = dbContext.Set<TEntity>();
    }

    public IQueryable<TEntity> GetAll()
    {
        return _dbSet;
    }

    public async Task<TEntity> GetByIdAsync(object id, CancellationToken cancellationToken)
    {
        return await _dbSet.FindAsync(id, cancellationToken);
    }

    public async Task<TEntity> AddAsync(TEntity entity, CancellationToken cancellationToken)
    {
        await _dbSet.AddAsync(entity);
        await this.SaveAsync(cancellationToken);
        return entity;
    }

    public async Task UpdateAsync(object id, TEntity entity, CancellationToken cancellationToken)
    {
        var OriginEntity = await this.GetByIdAsync(id, cancellationToken);
        _dbSet.Attach(OriginEntity);
        this.SetProperty(ref entity, this.GetPrimaryKeyName<TEntity>(), id);
        _dbContext.Entry(OriginEntity).CurrentValues.SetValues(entity);
        //_dbContext.Entry(entity).State = EntityState.Modified;
        await this.SaveAsync(cancellationToken);
    }

    public async Task DeleteAsync(object id, CancellationToken cancellationToken)
    {
        TEntity entityToDelete = _dbSet.Find(id);
        _dbSet.Remove(entityToDelete);
        await this.SaveAsync(cancellationToken);
    }

    public async Task SaveAsync(CancellationToken cancellationToken)
    {
        await _dbContext.SaveChangesAsync(cancellationToken);
    }

    public string GetPrimaryKeyName<TEntity>()
    {
        var entityType = _dbContext.Model.FindEntityType(typeof(TEntity));
        var primaryKey = entityType.FindPrimaryKey();
        var primaryKeyPropertyName = primaryKey.Properties.Select(x => x.Name).FirstOrDefault();
        return primaryKeyPropertyName;
    }

    public void SetProperty<TEntity>(ref TEntity obj, string propertyName, object value)
    {
        var propertyInfo = obj.GetType().GetProperty(propertyName);

        if (propertyInfo == null)
            throw new Exception("Could not find property.");

        if (!propertyInfo.CanWrite)
            throw new Exception("Primary Key property is read-only.");

        propertyInfo.SetValue(obj, value, null);
    }
}
