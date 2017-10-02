 function doMath()
            {
              var cip=parseInt($("#cp").val());
              var mrk=parseInt($("#mrk").val());
              var disc=parseInt($("#prof").val());
              var mrk_price=cip+((mrk/100)*cip);
              var discount=(disc/100)*mrk_price;
              var sip=mrk_price-discount;
              var profit = 0;
              var fdf = "";
              var currency=$("#op").val();
              if(sip > cip)
              {
              profit = sip - cip;
              fdf=profit;
              }
              else
              {
                fdf=0;
              }
              var prof_per=(profit/cip)*100;
              if(currency=="usd")
                {
                  document.getElementById("re1").innerHTML="The selling price is "+sip+" USD";
                  if(fdf>0){
              document.getElementById("re").innerHTML="The profit gained is "+fdf+" USD";
              document.getElementById("re2").innerHTML="The profit percentage is "+prof_per+" USD";
                  }
                  else if(fdf<0)
                  {
                    document.getElementById("re").innerHTML="Loss is "+fdf+" USD";
                    document.getElementById("re2").innerHTML="The loss percentage is "+prof_per+" USD";
                  }
                  else
                    {
                      document.getElementById("re").innerHTML="Loss is "+fdf+" USD";
                      document.getElementById("re2").innerHTML="No loss....No gain";
                    }
                }
              else if(currency=="inr")
                {
                  document.getElementById("re1").innerHTML="The selling price is "+(sip*65.29)+" INR";
                  if(fdf>0){
              document.getElementById("re").innerHTML ="The profit gained is "+(fdf*65.29)+" INR";
              document.getElementById("re2").innerHTML ="The profit percentage is "+(prof_per*65.29)+" INR";
                  }
                  else if(fdf<0)
                  {
                    document.getElementById("re").innerHTML ="Loss is "+(fdf*65.29)+" INR";
                    document.getElementById("re2").innerHTML ="The loss percentage is "+(prof_per*65.29)+" INR";
                  }
                  else
                    {
                      document.getElementById("re").innerHTML ="Loss is "+(fdf*65.29)+" INR";
                      document.getElementById("re2").innerHTML ="No loss....No gain";
                    }
                }

                else if(currency=="euro")
                  {
                document.getElementById("re1").innerHTML="The selling price is "+(sip*0.85)+" Euros";
                if(fdf>0){
                document.getElementById("re").innerHTML ="The profit gained is "+(fdf*0.85)+" Euros";
                document.getElementById("re2").innerHTML ="The profit percentage is "+(prof_per*0.85)+" Euros";
                }
                else if(fdf<0)
                  {
                    document.getElementById("re").innerHTML ="Loss is "+(fdf*0.85)+" Euros";
                    document.getElementById("re2").innerHTML ="The loss percentage is "+(prof_per*0.85)+" Euros";
                  }
                  else
                    {
                      document.getElementById("re").innerHTML ="Loss is "+(fdf*0.85)+" Euros";
                      document.getElementById("re2").innerHTML ="No loss.....No gain";
                    }

                  }

                  else if(currency=="aus")
                    {
                  document.getElementById("re1").innerHTML="The selling price is "+(sip*1.28)+" Australian Dollars";
                  if(fdf>0){
                  document.getElementById("re").innerHTML ="The profit gained is "+(fdf*1.28)+" Australian Dollars";
                  document.getElementById("re2").innerHTML = "The profit percentage is "+(prof_per*1.28)+" Australian Dollars";
                  }
                  else if(fdf<0){
                    document.getElementById("re").innerHTML ="Loss is "+(fdf*1.28)+" Australian Dollars";
                    document.getElementById("re2").innerHTML = "The loss percentage is "+(prof_per*1.28)+" Australian Dollars";
                    }
                    else{
                      document.getElementById("re").innerHTML ="Loss is "+(fdf*1.28)+" Australian Dollars";
                      document.getElementById("re2").innerHTML = "No loss.....No gain";
                      }

                    }

                    else if(currency=="pound")
                      {
                    document.getElementById("re1").innerHTML="The selling price is "+(sip*0.75)+" British Pounds";
                    if(fdf>0)
                      {
                    document.getElementById("re").innerHTML ="The profit gained is "+(fdf*0.75)+" British Pounds";
                    document.getElementById("re2").innerHTML = "The profit percentage is "+(prof_per*0.75)+" British Pounds";
                      }
                      else if(fdf<0)
                        {
                      document.getElementById("re").innerHTML ="Loss is "+(fdf*0.75)+" British Pounds";
                      document.getElementById("re2").innerHTML = "The loss percentage is "+(prof_per*0.75)+" British Pounds";
                        }
                        else
                          {
                            document.getElementById("re").innerHTML ="Loss is "+(fdf*0.75)+" British Pounds";
                            document.getElementById("re2").innerHTML = "No loss.....No gain";

                          }

                      }



            };
