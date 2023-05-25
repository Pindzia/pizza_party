namespace pizza_party_api.Repositories;

public interface IRepository<TEntity> where TEntity : class
{
    IQueryable<TEntity> GetAll();
    Task<TEntity> GetByIdAsync(object id, CancellationToken cancellationToken);
    Task<TEntity> AddAsync(TEntity entity, CancellationToken cancellationToken);
    Task UpdateAsync(object id, TEntity entity, CancellationToken cancellationToken);
    Task DeleteAsync(object id, CancellationToken cancellationToken);
    Task SaveAsync(CancellationToken cancellationToken);
    string GetPrimaryKeyName<TEntity>();
    void SetProperty<TEntity>(ref TEntity obj, string propertyName, object value);
}

