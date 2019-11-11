using System.Net;
using ASP.NETCoreWebApplication.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace ASP.NETCoreWebApplication.Controllers
{
    [ApiController]
    [Route("api/counter")]
    public class CounterController : ControllerBase
    {
        private readonly ILogger<CounterController> _logger;
        private readonly ICounterStorage _counterStorage;

        public CounterController(ILogger<CounterController> logger, ICounterStorage counterStorage)
        {
            _logger = logger;
            _counterStorage = counterStorage;
        }

        [HttpGet]
        public CounterData Get()
        {
            return _counterStorage.Counter;
        }
        
        [HttpPut]
        [ProducesResponseType(StatusCodes.Status202Accepted)]
        public IActionResult Put(CounterData data)
        {
            _logger.LogInformation($"Setting count to {data.Count}");
            _counterStorage.Counter = data;
            return Accepted();
        }
    }
}
