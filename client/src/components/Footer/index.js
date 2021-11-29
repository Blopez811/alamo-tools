import React from 'react';
import ContactUs from '../ContactUs'
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {


    return(
    <footer class="bg-dark text-center text-white">
  {/* <!-- Grid container --> */}
  <div class="container p-4 pb-0">
    {/* <!-- Section: Form --> */}
    <section class="">
      <form action="">
        {/* <!--Grid row--> */}
        <div class="row d-flex justify-content-center">
          {/* <!--Grid column--> */}
          <div class="col-auto">
            <p class="pt-2">
              <strong class='footer-style'>Reach Out For Customer Service</strong>
            </p>
          </div>
          {/* <!--Grid column--> */}

          {/* <!--Grid column--> */}
          <div class="col-md-5 col-12">
            {/* <!-- Email input --> */}
            <div class="form-outline form-white mb-4">
              <input type="email" id="form5Example29" class="form-control" />
              <label class="form-label footer-style" for="form5Example29">Email address</label>
            </div>
          </div>
          {/* <!--Grid column--> */}

          {/* <!--Grid column--> */}
          <div class="col-auto">
            {/* <!-- Submit button --> */}
            <button type="submit" class="btn btn-outline-light mb-4 footer-style">
              Contact Us
            </button>
          </div>
          {/* <!--Grid column--> */}
        </div>
        {/* <!--Grid row--> */}
      </form>
    </section>
    {/* <!-- Section: Form --> */}
  </div>
  {/* <!-- Grid container --> */}

  {/* <!-- Copyright --> */}
  <div class="text-center p-3 footer-style" style={{backgroundColor : 'rgba(0, 0, 0, 0.2)'}}>
    © 2021 Copyright:
    <a class="text-whiteclass footer-style" href="https://mdbootstrap.com/">The Alamo Group</a>
  </div>
  {/* <!-- Copyright --> */}
</footer>
    )
};

export default Footer;