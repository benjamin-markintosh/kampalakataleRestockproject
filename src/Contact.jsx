function Contact() {
  return (
    <div>
      <div className="box-border">
        <div className="text-center ">
          <h2 className="mt-20 ">Contact Us</h2>
          <p className="">Any Inquiry please leave us a message:</p>
        </div>
        <div className="row">
          <div className="column">
            <img src="" className="" />
          </div>
          <div className="column">
            <form action="/action_page.php">
              <label htmlFor="fname">First Name</label>
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Your name.."
              />
              <label htmlFor="lname">Last Name</label>
              <input
                type="text"
                id="lname"
                name="lastname"
                placeholder="Your last name.."
              />
              <label htmlFor="subject">Subject</label>
              <textarea
                id="subject"
                name="subject"
                placeholder="Write something.."
                style={{ height: "170px" }}
                defaultValue={""}
              />
              <input type="submit" defaultValue="Submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
