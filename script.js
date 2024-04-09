import { injectSpeedInsights } from '@vercel/speed-insights';

injectSpeedInsights();
function cow() {
    Swal.fire({icon: "error",title: "Link not found",text: "Sorry the links don't work at this time. \n Please contact us at slimespritz@gmail.com \n Thanks!",});
}