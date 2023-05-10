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
        _dbContext.Entry(OriginEntity).CurrentValues.SetValues(entity);
        _dbContext.Entry(entity).State = EntityState.Modified;
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
}
