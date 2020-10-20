using Microsoft.EntityFrameworkCore;
using ExpenseTracker.Models;

namespace ExpenseTracker.DAL
{
    public class ExpenseTrackerContext : DbContext
    {
        public DbSet<Expense> Expenses { get; set; }

        public ExpenseTrackerContext(DbContextOptions<ExpenseTrackerContext> options) : base(options)
        { }
    }
}