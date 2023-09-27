const _child_process = require("child_process");

init();

function init() {
  console.log("Init process");

  const cmdCero = `cd "C:\\Program Files\\LibreOffice 5\\program" && soffice --headless`;
  const cmdOne = `cd  "C:\\Program Files\\LibreOffice 5\\program" && soffice --headless --nolockcheck --nologo --norestore C:\\officeprocessor\\document1682476048393.xlsx macro:///Standard.Module1.FitToPage`;
  const cmdTwo = `cd  "C:\\Program Files\\LibreOffice 5\\program" && soffice --headless --invisible --nodefault --view --nolockcheck --nologo --norestore --nofirststartwizard --convert-to pdf --outdir C:\\officeprocessor C:\\officeprocessor\\document1682476048393.xlsx`;

  try {
    (0, _child_process.execSync)(cmdCero, {
      timeout: 10000
    });
  } catch {}

  try {
    console.log("applying macro");
    (0, _child_process.execSync)(cmdOne, {
      timeout: 600000,
    });
    console.log("macro applied");
    console.log("converting to pdf");
    (0, _child_process.execSync)(cmdTwo, {
      timeout: 600000,
    });
    console.log("pdf converted");
  } catch (error) {
    console.log("an error ocurred");
  }

  console.log("command finished");
}
