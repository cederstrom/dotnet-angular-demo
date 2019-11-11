namespace ASP.NETCoreWebApplication.Services
{
    public interface ICounterStorage
    {
        CounterData Counter { get; set; }
    }
}