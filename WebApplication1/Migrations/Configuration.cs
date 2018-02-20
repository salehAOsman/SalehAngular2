namespace WebApplication1.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using WebApplication1.Models;

    internal sealed class Configuration : DbMigrationsConfiguration<WebApplication1.Models.ApplicationDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
        }

        protected override void Seed(WebApplication1.Models.ApplicationDbContext context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.
            //


            //Saleh 7* we uncomment this to add som information here 
            context.People.AddOrUpdate(
              p => p.Name,
              //we use Using space for Person models 
              new Person { Name = "Andrew Peters", Age=34 },
              new Person { Name = "Brice Lambson" , Age=43},
              new Person { Name = "Rowan Miller" , Age=89}
            );
            // Saleh 8*  Go to PM> Update-Database 
            //Saleh 9* jump to *-mdf to see data base People table to see new information some we added here 
            //Saleh 10* we will jump to client side now we will start from 'Person.ts'
        }
    }
}
