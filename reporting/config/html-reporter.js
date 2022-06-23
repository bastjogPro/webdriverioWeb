const reporter = require('cucumber-html-reporter');
const nodemailer = require('nodemailer');

/*
** Génération du rapport
*/

const options = {
  theme: 'hierarchy',
  jsonDir: 'reporting/rapports',
  output: 'reporting/rapports/cucumber_report.html',
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: true,
  ignoreBadJsonFile: true,
  screenshotsDirectory: 'reporting/rapports/screenshots/',
  launchReport: true,
  brandTitle: 'Rapport d\'exécution',
  metadata: {
    "Plateforme": "",
    "Branche Auto": "",
    "Suite" : "",
    "Canal" : "",
    "Navigateur": "",
    "Systeme": ""
  }
};

reporter.generate(options);



/*
** Envoi du rapport par mail
*/

// Date du jour
var dateDuJour = new Date();
dateDuJour = dateDuJour.getDate() + "_" + parseInt(dateDuJour.getMonth())+1 + "_" + dateDuJour.getFullYear()

// Destinataires
var destinataires = ['lecle020@gmail.com']

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'emaildetesteboutiquev1@gmail.com',
    pass: 'Laposte2020!'
  }
});

var mailOptions = {
  from: 'emaildetesteboutiquev1@gmail.com',
  to: destinataires,
  subject: 'Rapport d\'exécution WebDriverIO__' + dateDuJour,
  text: '',
  attachments : [
    {
      filename: 'cucumber_report.html',
      path: 'reporting/rapports/cucumber_report.html'
    }
  ]
};

/*transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email envoyé : ' + info.response);
  }
})*/