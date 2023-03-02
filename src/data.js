import React from "react";
import im1 from "./images/ser1.png"
import im2 from "./images/ser2.png"
import im3 from "./images/ser3.png"
import im4 from "./images/wooo.png"
import im5 from "./images/up1.png"
import im6 from "./images/up2.png"
import im7 from "./images/up3.png"
import im8 from "./images/pro1.png"
import im9 from "./images/pro2.png"
import im10 from "./images/pro3.png"
import im11 from "./images/pro-4.png"

const Headin = {
    h1: "Logo",
    h2: <h1>We Provide <br></br>Architectural design<br></br>and Construction</h1>,
    h3: <h1>300<span className="text-blue-500">+</span></h1>,
    h4: <h1>900<span className="text-blue-500">+</span></h1>,
    h5: <h1>20<span className="text-blue-500">+</span></h1>,
    h6: <h1>Our Excellent<br></br>Services</h1>,
    h7: "Industrial",
    h8: "Commercial",
    h9: "Residential",
    h10: <h1>What Make Us <br></br>Different?</h1>,
    h11: "Experienced",
    h12: "competitive price",
    h13: "On Time",
    h14: "Best Materials",
    h15: "Dianne Russell",
    h16: <h1>Meet and talk with<br></br>
        our best architecture</h1>,
    h17: "How it works",
    h18: <h1>Our Story<br></br>
        Who we are</h1>,
    h19: "News & Update",
    h20: <h1><span className="text-[28px] font-semibold">12</span><br></br>Jan</h1>,
    h21: <h1>Elements of Content in Epoxy<br></br> Paint </h1>,
    h22: <h1>5 Right Steps in Warehouse<br></br> Planning and Construction</h1>,
    h23: <h1>The Right Solution to Build a<br></br> Sturdy Type 45 House</h1>,
    h24: <h1>Our collection<br></br>
        best project</h1>,
    h25: "Company",
    h26: "More",
}
const Paragraph = {
    p1: <p>More than 100 building and housing projects that we have built.<br></br>The building owner choose us over other contractors in jakarta,<br></br>because our work is different</p>,
    p2: <p>Happy<br></br>Client</p>,
    p3: <p>Amazing<br></br> Projects</p>,
    p4: <p>Awards <br></br>Winning</p>,
    p5: <p>Check out our best service you can possibly orders in building<br></br>
        your company and don't forget to ask via our email or our<br></br>
        customer service if you are interested in using our services<br></br></p>,
    p6: <p>Industrial development is our main<br></br>
        line of business. We do Factory<br></br>
        Construction, Warehouse and others<br></br></p>,
    p7: <p>Our experience building in the<br></br>
        Commercial field includes Showrooms,<br></br>
        Supermalls and Office Buildings<br></br></p>,
    p8: <p>Residential development is the<br></br>
        beginning that has shaped us to this<br></br>
        day. Our development includes<br></br>
        Houses & Apartments<br></br></p>,
    p9: <p>Our experience of 25 years of<br></br>
        building and making<br></br>
        achievements in the world<br></br>
        of development</p>,
    p10: <p>The prices we offer you are<br></br>
        very competitive without<br></br>
        reducing the quality of the<br></br>
        company's work in the<br></br>
        slightest</p>,
    p11: <p>We prioritize the quality of<br></br>
        our work and finish it on time</p>,
    p12: <p>The material determines the<br></br>
        building itself so we<br></br>
        recommend that you use<br></br>
        the best & quality materials<br></br>
        in its class.</p>,
    p13: <p>More than 20 years of experience<br></br>
        in the field architecture and has<br></br>
        worked on project up to 100+</p>,
    p14: <p>All our teams are professional and competent in<br></br>
        their fields and will help you realize your dream<br></br>
        building with the excellent result.</p>,
    p15: <p>Established in 1992, PT. Wahana Cipta operates as a General<br></br>
        Contracting company with a footprint that we have planted<br></br>
        throughout Indonesia. Initially, we focused on construction in<br></br>
        the field of residential housing development in Jakarta. <br></br>
        As the company grows, now we are present as a reliable...</p>,
    p16: <p>Epoxy paint and epoxy floor<br></br>
        contractor. Have you heard the two<br></br>
        terms? And what does that have to<br></br>
        do with the construction of existing<br></br>
        buildings? Epoxy itself is included in<br></br>
        the type of resin... <span className="text-blue-600">Read more</span></p>,
    p17: <p>Planning the construction of a<br></br>
        warehouse for both industrial,<br></br>
        personal and other goods storage<br></br>
        must be done carefully. <br></br>
        When the planning is done properly,<br></br>
        the construction is... <span className="text-blue-600">Read more</span></p>,
    p18: <p>Having a solid home is certainly<br></br>
        everyone'  s dream. How not, the<br></br>
        house is a place where the residents<br></br>
        can rest and take shelter from the<br></br>
        bad weather... <span className="text-blue-600">Read more</span></p>,
    p19: <p>is a general contractor company based in Jakarta. More than 25 years of<br></br> experience in building and carving out Indonesia's development.</p>
}

const Serviceim = {
    img: [im1, im2, im3, im4],
    h1: ["Industrial", "Commercial", "Reswdential"],
    p: ["Industrial development is our main line of business.We do Factory Construction, Warehouse and others", "Our experience building in the Commercial field includes Showrooms, Supermalls and Office Buildings", "Residential development is the beginning that has shaped us to this day.Our development includes Houses & Apartments"]
}
const Make = {
    h1: ["Experienced", "competitive price", "On Time", "Best Materials"],
    p: ["Our experience of 25 years of building and making achievements in the world of development", "The prices we offer you are very competitive without reducing the quality of the company's work in the slightest", "We prioritize the quality of our work and finish it on time", "The material determines the building itself so we recommend that you use the best & quality materials in its class."]
}
const Update = {
    img: [im5, im6, im7],
    h1: <h1>12<br />jun</h1>,
    h2: ["Elements of Content in Epoxy Paint ", "5 Right Steps in Warehouse Planning and Construction", "The Right Solution to Build a Sturdy Type 45 House"]

}
const Project = {
    img: [im8, im9, im10, im11]
}
const NavData = {
    li: [<span className="text-white">Home</span>, "Services", "Find a Team", "About Us", "Articles", "Portfolio", "Contact us"]
}
export { Serviceim, Make, Update, Project, NavData, Headin, Paragraph }