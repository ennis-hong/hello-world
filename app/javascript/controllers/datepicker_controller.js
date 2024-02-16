// Visit The Stimulus Handbook for more details
// https://stimulusjs.org/handbook/introduction
//
// This example controller works with specially annotated HTML like:
//
// <div data-controller="hello">
//   <h1 data-target="hello.output"></h1>
// </div>

import { Controller } from "stimulus"
import { MandarinTraditional } from "flatpickr/dist/l10n/zh-tw.js"
import flatpickr from "flatpickr"
require("flatpickr/dist/flatpickr.css")

export default class extends Controller {
  static targets = ["dateInput"]

  connect() {
    // console.log(this.targets)
    flatpickr(this.dateInputTarget, {
      locale: MandarinTraditional,
    })
  }
}
