using Microsoft.EntityFrameworkCore;
using pizza_party_api.Database;
using pizza_party_api.Repositories;
using pizza_party_api.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.



builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<PizzaShopDbContext>(options =>
        options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));
builder.Services.AddScoped(typeof(IRepository<>), typeof(Repository<>));
builder.Services.AddScoped<IPizzaService, PizzaService>();
builder.Services.AddScoped<ICartService, CartService>();
builder.Services.AddScoped<IOrderService, OrderService>();
builder.WebHost.ConfigureKestrel((context, options) =>
{
    // Set properties and call methods on options
    var certSettings = context.Configuration.GetSection("Kestrel:Certificates:Default");
    var certPath = certSettings.GetValue<string>("Path");
    var pwd = certSettings.GetValue<string>("Password");
    options.ConfigureHttpsDefaults(o =>
    {
        o.ServerCertificate = new System.Security.Cryptography.X509Certificates.X509Certificate2(certPath, pwd);
    });
});

//ensure that DB is created
using (var dbContext = builder.Services.BuildServiceProvider().GetRequiredService<PizzaShopDbContext>())
{
    dbContext.Database.EnsureCreated();
}

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(builder => builder
    .AllowAnyOrigin()
    .AllowAnyMethod()
    .AllowAnyHeader());

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
