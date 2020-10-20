using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ExpenseTracker.Models;
using ExpenseTracker.DAL;
using Microsoft.EntityFrameworkCore;

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
        public async Task<IActionResult> Get()
        {
            return Ok(await ctx.Expenses.ToListAsync());
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var expense = await ctx.FindAsync<Expense>(id);
            if (expense == null)
            {
                return NotFound();
            }
            return Ok(expense);
        }

        [HttpPost]
        public async Task<IActionResult> Create(Expense expense)
        {
            ctx.Expenses.Add(expense);
            await ctx.SaveChangesAsync();
            return Ok(expense);
        }

        [HttpPut]
        public async Task<IActionResult> Update(Expense expense)
        {
            var expenseToUpdate = await ctx.FindAsync<Expense>(expense.ExpenseID);
            if (expenseToUpdate == null)
            {
                return NotFound();
            }
            ctx.Entry(expenseToUpdate).CurrentValues.SetValues(expense);
            ctx.SaveChanges();
            return Ok(expense);
        }

        }
    }
}
