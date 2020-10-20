using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ExpenseTracker.Models;
using ExpenseTracker.DAL;

namespace ExpenseTracker.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ExpenseController : ControllerBase
    {
        private readonly ILogger<ExpenseController> logger;
        private readonly ExpenseTrackerContext ctx;

        public ExpenseController(ILogger<ExpenseController> logger, ExpenseTrackerContext ctx)
        {
            this.logger = logger;
            this.ctx = ctx;
        }

        [HttpGet]
        public IEnumerable<Expense> Get()
        {
            return new List<Expense>();
        }
    }
}
