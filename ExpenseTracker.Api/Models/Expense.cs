using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace ExpenseTracker.Models
{
    public enum ExpenseType
    {
        Food,
        Drinks,
        Other
    }
    public enum CurrencyType
    {
        Eur,
        Gbp,
        Usd,
        Chf
    }
    public class Expense
    {
        public int ExpenseID { get; set; }
        public decimal Amount { get; set; }
        public string Recipient { get; set; }
        public CurrencyType Currency { get; set; }
    }
}