const { exec } = require('child_process');
const {resolve} = require('path')


const repoList = {
  get_jobs_bot: "",
  welcome_bot: "",
}
exec('git pull', (error, stdout, stderr) => {

  if (error) {
    console.error(`error: ${error.message}`);
    return;
  }

  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
  
  console.log(`git pull Ok! Out:\n${stdout}`);

});