using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        //Saleh 2* We create jason method 
        //
        public JsonResult PeopleList()
        {
            ApplicationDbContext db = new ApplicationDbContext();
            // we have to create DbSet in IdentityModel line 33 as this " public DbSet<Person> People { get; set; }"

            return Json(db.People.ToList(), JsonRequestBehavior.AllowGet);
            //Saleh 3* click F12 to jump to identityModels.cs to add DbSet for People class
        }

        //**6 we create here method CreatePerson
        public JsonResult CreatePerson(Person person)
        {
            ApplicationDbContext db = new ApplicationDbContext();//we need object to fitch data base this is db
            db.People.Add(person);//we add this object to data base 
            db.SaveChanges();
            return Json(person, JsonRequestBehavior.AllowGet); //add 
        }

        //**13 We will add here 

        public JsonResult EditPerson(Person person)
        {
            ApplicationDbContext db = new ApplicationDbContext();//we need object to fitch data base this is db
            Person OldPerson = db.People.SingleOrDefault(p => p.Id == person.Id);

            OldPerson.Name = person.Name;
            OldPerson.Age = person.Age;
            db.SaveChanges();
            return Json(person, JsonRequestBehavior.AllowGet); //add 
        }
    }
}