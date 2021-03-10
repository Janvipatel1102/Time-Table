import { Component } from '@angular/core';

var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

  
export class AppComponent {
    title = 'TimeTable';
    d =  new Date();
    day  = weekday[this.d.getDay()];
   
   monday =this.Monday();
   tuesday =this.Tuesday();
   wednesday =this.Wednesday();
   thrusday =this.Thrusday();
   friday =this.Friday();
   saturday =this.Saturday();
   sunday =this.Sunday();
   
   
   Monday()
    {
      if (this.day == weekday[1]) {
        console.log(this.day);
        return true;
      }
      else
        return false;
    }

    Tuesday()
    {
      if (this.day ==weekday[2] ) {
        return true;
      }
      else
        return false;
    }

    Wednesday()
    {
      if (this.day == weekday[3]) {
        return true;
      }
      else
        return false;
    }


    Thrusday()
    {
      if (this.day == weekday[4]) {
        return true;
      }
      else
        return false;
    }

    Friday()
    {
      if (this.day == weekday[5]) {
        return true;
      }
      else
        return false;
    }
    
    Saturday()
    {
      if (this.day == weekday[6]) {
        return true;
      }
      else
        return false;
    }

    Sunday()
    {
      if (this.day ==weekday[0]) {
        return true;
      }
      else
        return false;
    }

    introToCrypto()
     {
       window.open("https://meet.google.com/fgi-rdhc-jqk", "_blank");   
     }
    organizationalBehaviour()
    {
      window.open("https://meet.google.com/zic-oaae-gzz?authuser=0&pli=1", "_blank");  
    }
    visualAnthropology()
    {
      window.open("https://meet.google.com/lookup/d6ttr3uk36", "_blank");  
    }
    noSql()
    {
      window.open("https://meet.google.com/sqm-twby-ixi", "_blank");  
    }
    se()
    {
      window.open("https://daiict.webex.com/webappng/sites/daiict/meeting/info/691e5487a84e44d99c0e3998a9ea9d67?siteurl=daiict&MTID=maa4bfcff62b067b3eb7204039b66e788&meetingAuthToken=QUhTSwAAAAQTeiM9QOQSMkf2Cfi%2BiKbkctKkAJXt69i%2FMz%2Fd65UNcP5H8P4XUSN8UUeV6Ry4CP725BfqcSdaPB7E5zzaOT7LhPeDzgdIpW%2FAHPVTEV%2BPrDhEAg8US%2F4GPqYXAE1DvUOuPEtr0TBxw6XEzBwUrUR%2B9z2FijeZ%2BrvuNItmQAFLxocCLv2NJpSZkjbWCmuksbYhzyQV3pMt7tIlB7jCIjdhVqQ2mtFQe6uzHz4xvhk%2BJA%3D%3D", "_blank"); 
    }
    
    introToRobo()
    {
      window.open("https://meet.google.com/esy-cyhz-kwo", "_blank");  
    }
    os()
    {
      window.open("https://meet.google.com/quu-wzap-vba", "_blank");  
    }
  
   introToQuantamMechanics()
    {
      window.open("https://www.google.com", "_blank"); 
    }
    EinsteinPhysics()
    {
      window.open("https://www.google.com", "_blank"); 
    }
    CulturePoliticsIdentity()
    {
      window.open("https://www.google.com", "_blank"); 
    }
   southAsia()
    {
      window.open("http://meet.google.com/dmq-mdyy-nze", "_blank"); 
    }

    SatelitteCommunication()
    {
      window.open("https://www.google.com", "_blank"); 
    }

    MachineLearning()
    {
      window.open("https://meet.google.com/krz-jces-qkx ", "_blank"); 
    }


    ModelsofComputation()
    {
      window.open("https://www.google.com", "_blank"); 
    }
    
    ComputerGraphics()
    {
      window.open("https://meet.google.com/lookup/auaq2qkjlz?authuser=1&hs=179", "_blank"); 
    }
    

    ModelingandSimulation()
    {
      window.open("https://www.google.com", "_blank"); 
    }
    DataAnalysisandVisualization()
    {
      window.open("https://www.google.com", "_blank"); 
    }
    DigitalSignalProcessing()
    {
      window.open("https://www.google.com", "_blank"); 
    }
    SpeechTechnology()
    {
      window.open("https://www.google.com", "_blank"); 
    }
    CMOSAnalogICDesign()
    {
      window.open("https://meet.google.com/lookup/elfzo24tzb?authuser=1&hs=179", "_blank"); 
    }

     InternetofThings()
    {
      window.open("https://www.google.com", "_blank"); 
    }

    ComputationalFinance()
    {
      window.open("https://www.google.com", "_blank"); 
    }

    RFEngineering()
    {
      window.open("https://www.google.com", "_blank"); 
    }

    AdaptiveSignalProcessing()
    {
      window.open("https://www.google.com", "_blank"); 
    }

    LogicforComputerScience()
    {
      window.open("https://www.google.com", "_blank"); 
    }

    HighPerformanceComputing()
    {
      window.open("https://www.google.com", "_blank"); 
    }
//labs


 introToRoboLab()
 {
  window.open("http://meet.google.com/esy-cyhz-kwo?authuser=2&hs=179", "_blank"); 
}

    SoftwareEnginneringLab()
    {
      window.open("https://daiict.webex.com/daiict/j.php?MTID=m6d8e7d603f16bee2d0f2ef2a32850fea", "_blank"); 
    }

    MachineLearningLab()
    {
      window.open("https://meet.google.com/pcg-oeef-unx?hs=224", "_blank"); 
    }
    ComputerGraphicsLab()
    {
      window.open("https://meet.google.com/lookup/auaq2qkjlz?authuser=1&hs=179", "_blank"); 
    }
   noSqlLab()
    {
      window.open("https://meet.google.com/oby-uusn-ibx", "_blank"); 
    }
   osLabGroup5()
   {
    window.open("https://meet.google.com/sid-vmbi-osm?authuser=0", "_blank");
   }
   osLabGroup4()
   {
    window.open("https://meet.google.com/dhn-caim-mjr?authuser=0", "_blank");
   }
   obThrusday()
   {
    window.open("https://meet.google.com/zzc-pnpt-dvo?hs=122&authuser=0", "_blank");
   }

    mondayToggle()
    {
     this.monday =true;
      this.tuesday =false;
      this.wednesday =false;
      this.thrusday =false;
      this.friday =false;
      this.saturday =false;
      this.sunday =false;
     

    }
    tuesdayToggle()
    {
     this.monday =false;
      this.tuesday =true;
      this.wednesday =false;
      this.thrusday =false;
      this.friday =false;
      this.saturday =false;
      this.sunday =false;
     

    }
    wednesdayToggle()
    {
     this.monday =false;
      this.tuesday =false;
      this.wednesday =true;
      this.thrusday =false;
      this.friday =false;
      this.saturday =false;
      this.sunday =false;
     

    }
    thrusdayToggle()
    {
     this.monday =false;
      this.tuesday =false;
      this.wednesday =false;
      this.thrusday =true;
      this.friday =false;
      this.saturday =false;
      this.sunday =false;
     

    }
    
    fridayToggle()
    {
     this.monday =false;
      this.tuesday =false;
      this.wednesday =false;
      this.thrusday =false;
      this.friday =true;
      this.saturday =false;
      this.sunday =false;
     

    }
   
    saturdayToggle()
    {
     this.monday =false;
      this.tuesday =false;
      this.wednesday =false;
      this.thrusday =false;
      this.friday =false;
      this.saturday =true;
      this.sunday =false;
     

    }
    sundayToggle()
    {
     this.monday =false;
      this.tuesday =false;
      this.wednesday =false;
      this.thrusday =false;
      this.friday =false;
      this.saturday =false;
      this.sunday =true;
     

    }
    
     
}
