<template>
  <div class="container contactus">
    <div class="row">
      <div class="col-md-6 contact-box">
        <div class="contact-title">GET IN TOUCH</div>
        <div class="contact-text mt-2">
          In This War Of Mine you do not play as an elite soldier, rather a
          group of civilians trying to survive in a besieged city; struggling
          with lack of food, medicine and constant danger from snipers and
          hostile scavengers. The game provides an experience of war seen from
          an entirely new angle. \n \nThe pace of This War of Mine is imposed by
          the day and night cycle.
        </div>
        <div class="contact-form-box container mt-5">
          <div class="row">
            <div class="contact-form-title">Contact Form</div>
          </div>
          <div class="row mt-3 form-row">
            <div class="col-md-6">
              <div class="mb-3 form-item">
                <label for="formGroupExampleInput" class="form-label"
                  >Name <span class="form-star">*</span></label
                >
                <input
                  type="text"
                  class="form-control"
                  id="formGroupExampleInput"
                  placeholder=""
                />
              </div>
            </div>
            <div class="col-md-6 form-item">
              <div class="mb-3">
                <label for="formGroupExampleInput" class="form-label"
                  >Email Address <span class="form-star">*</span></label
                >
                <input
                  type="text"
                  class="form-control"
                  id="formGroupExampleInput"
                  placeholder=""
                />
              </div>
            </div>
          </div>
          <div class="row mt-3 form-row">
            <div class="">
              <div class="mb-3 form-item">
                <label for="formGroupExampleInput" class="form-label"
                  >Message <span class="form-star">*</span></label
                >
                <textarea
                  class="form-control"
                  id="formGroupExampleInput"
                  rows="3"
                >
                </textarea>
              </div>
            </div>
          </div>
          <div class="row mt-3 form-row">
            <div class="">
              <div class="mb-3 form-item">
                <button
                  type="button"
                  class="
                    clear-button
                    form-control
                    btn btn-outline-secondary
                    px-3
                  "
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactUs",
};
</script>
