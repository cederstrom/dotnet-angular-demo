namespace ASP.NETCoreWebApplication.Services
{
    public class InMemoryCounterStorage : ICounterStorage
    {
        public CounterData Counter { get; set; } = new CounterData();
    }
}
