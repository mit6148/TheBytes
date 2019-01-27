const svgCanvas = d3.select(".circle-chart")
     .append("svg")
     .attr("width", 1480)
     .attr("height", 700);

     const g2 = svgCanvas.append("g");


     //blue-greenish
 const g3 = g2.append("g");
 
 const circ1 = g3.append("a")
     .attr("xlink:href", "http://twittertrails.com/")
     .append("circle")
     .attr("cx", 60)
     .attr("cy", 350)
     .attr("r", 50)
     .attr("fill", "#2B9EB3");
 
 const twitterTrails = g3.append("text")
     .attr("x", 60)
     .attr("y", 350)
     .attr("font-size", 15)
     .attr("font-family", "helvetica neue")
     .attr("fill", "white")
     .attr("text-anchor", "middle") 
     .attr("pointer-events", "none")
     .text("Twitter Trails");
 
 const g4 = g2.append("g");
     
 //yellow
 const circ2 = g4.append("a")
     .attr("xlink:href", "https://www.snopes.com/")
     .append("circle")
     .attr("cx", 160)
     .attr("cy", 350)
     .attr("r", 50)
     .attr("fill", "#FCAB10");
 
 const snopes = g4.append("text")
     .attr("x", 160)
     .attr("y", 350)
     .attr("font-size", 15)
     .attr("font-family", "helvetica neue")
     .attr("text-anchor", "middle")
     .attr("fill", "white")
     .attr("pointer-events", "none")
     .text("Snopes");
 
 const g5 = g2.append("g");
 
 //red
 const circ3 = g5.append("a")
     .attr("xlink:href", "https://www.politifact.com/")
     .append("circle")
     .attr("cx", 260)
     .attr("cy", 350)
     .attr("r", 50)
     .attr("fill", "#F8333C");
 
 const politifact = g5.append("text")
     .attr("x", 260)
     .attr("y", 350)
     .attr("font-size", 15)
     .attr("font-family", "helvetica neue")
     .attr("fill", "white")
     .attr("text-anchor", "middle")
     .attr("pointer-events", "none")
     .text("Politifact");
 
 const g6 = g2.append("g");
 //purple
 const circ4 = g6.append("a")
     .attr("xlink:href", "https://www.opensecrets.org/")
     .append("circle")
     .attr("cx", 360)
     .attr("cy", 350)
     .attr("r", "50")
     .attr("fill", "#A4A8D1");
 
 const opensecrets = g6.append("text")
     .attr("x", 360)
     .attr("y", 350)
     .attr("font-size", 15)
     .attr("font-family", "helvetica neue")
     .attr("fill", "white")
     .attr("text-anchor", "middle")
     .attr("pointer-events", "none")
     .text("Open Secrets");
 
 const g7 = g2.append("g");
 
 //blue
 const circ5 = g7.append("a")
     .attr("xlink:href", "http://www.journalism.org/2018/09/10/news-use-across-social-media-platforms-2018/")
     .append("circle")
     .attr("cx", 460)
     .attr("cy", 350)
     .attr("r", 50)
     .attr("fill", "#42CAFD");
 
 const socialMedia1 = g7.append("text")
     .attr("x", 460)
     .attr("y", 340)
     .attr("font-size", 9)
     .attr("font-family", "helvetica neue")
     .attr("fill", "white")
     .attr("text-anchor", "middle")
     .attr("pointer-events", "none")
     .text("News Use Across");
 
 const socialMedia2 = g7.append("text")
     .attr("x", 460)
     .attr("y", 350)
     .attr("font-size", 9)
     .attr("font-family", "helvetica neue")
     .attr("fill", "white")
     .attr("text-anchor", "middle")
     .attr("pointer-events", "none")
     .text("Social Media Platforms");
 
     const socialMedia3 = g7.append("text")
     .attr("x", 460)
     .attr("y", 360)
     .attr("font-size", 9)
     .attr("font-family", "helvetica neue")
     .attr("fill", "white")
     .attr("text-anchor", "middle")
     .attr("pointer-events", "none")
     .text("2018");
 
 const g8 = g2.append("g");
 
 //orange
 const circ6 = g8.append("a")
     .attr("xlink:href", "https://newslit.org/get-smart/rumor-review-a-fake-trump-tweet-goes-out-of-control/")
     .append("circle")
     .attr("cx", 60)
     .attr("cy", 450)
     .attr("r", 50)
     .attr("fill", "#E57A44");
 
 const newslit = g8.append("text")
     .attr("x", 60)
     .attr("y",440)
     .attr("font-size", 15)
     .attr("font-family", "helvetica neue")
     .attr("fill", "white")
     .attr("text-anchor", "middle")
     .attr("pointer-events", "none")
     .text("Viral Fake");
 const newslit2 = g8.append("text")
     .attr("x", 60)
     .attr("y",460)
     .attr("font-size", 15)
     .attr("font-family", "helvetica neue")
     .attr("fill", "white")
     .attr("text-anchor", "middle")
     .attr("pointer-events", "none")
     .text("Tweet");
 
 
 const g9 = g2.append("g");
 //dark purple
 const circ7 = g9.append("a")
     .attr("xlink:href", "https://climatefeedback.org/")
     .append('circle')
     .attr("cx", 160)
     .attr("cy", 450)
     .attr("r", 50)
     .attr("fill", "#422040");
 
 const climatefeedback = g9.append("text")
     .attr("x", 160)
     .attr("y", 440)
     .attr("font-size", 15)
     .attr("font-family", "helvetica neue")
     .attr("fill", "white")
     .attr("text-anchor", "middle")
     .attr("pointer-events", "none")
     .text("Climate");
 
 const climatefeedback2 = g9.append("text")
     .attr("x", 160)
     .attr("y", 460)
     .attr("font-size", 15)
     .attr("font-family", "helvetica neue")
     .attr("fill", "white")
     .attr("text-anchor", "middle")
     .attr("pointer-events", "none")
     .text("Feedback");   
 
 const g10 = g2.append("g");
 
 //green-ish
 const circ8 = g10.append("a")
     .attr("xlink:href", "http://especiales.univision.com/detector-de-mentiras/")
     .append('circle')
     .attr("cx", 260)
     .attr("cy", 450)
     .attr("r", 50)
     .attr("fill", "#40C9A2");
 
 const univision = g10.append("text")
     .attr("x", 260)
     .attr("y", 440)
     .attr("font-size", 15)
     .attr("font-family", "helvetica neue")
     .attr("fill", "white")
     .attr("text-anchor", "middle")
     .attr("pointer-events", "none")
     .text("Univision");
 
 const univision2 = g10.append("text")
     .attr("x", 260)
     .attr("y", 460)
     .attr("font-size", 15)
     .attr("font-family", "helvetica neue")
     .attr("fill", "white")
     .attr("text-anchor", "middle")
     .attr("pointer-events", "none")
     .text("Fact Checker");
 
 const univision3 = g10.append("text")
     .attr("x", 260)
     .attr("y", 480)
     .attr("font-size", 15)
     .attr("font-family", "helvetica neue")
     .attr("fill", "white")
     .attr("text-anchor", "middle")
     .attr("pointer-events", "none")
     .text("(Spanish)");
 
 const g11 = g2.append("g");
 
 //pink
 const circ9 = g11.append("a")
     .attr("xlink:href", "https://www.kdd.org/exploration_files/19-1-Article2.pdf")
     .append("circle")
     .attr("cx", 360)
     .attr("cy", 450)
     .attr("r", 50)
     .attr("fill", "#F786AA");
 
 const datamining = g11.append("text")
     .attr("x", 360)
     .attr("y", 440)
     .attr("font-size", 12)
     .attr("font-family", "helvetica neue")
     .attr("fill", "white")
     .attr("text-anchor", "middle")
     .attr("pointer-events", "none")
     .text("Fake News");
 
 const datamining2 = g11.append("text")
     .attr("x", 360)
     .attr("y", 455)
     .attr("font-size", 12)
     .attr("font-family", "helvetica neue")
     .attr("fill", "white")
     .attr("text-anchor", "middle")
     .attr("pointer-events", "none")
     .text("Detection On");
 
 const datamining3 = g11.append("text")
     .attr("x", 360)
     .attr("y", 470)
     .attr("font-size", 12)
     .attr("font-family", "helvetica neue")
     .attr("fill", "white")
     .attr("text-anchor", "middle")
     .attr("pointer-events", "none")
     .text("Social Media");
 
 const g12 = g2.append("g");
 
 //sangria red
 const circ10 = g12.append("a")
     .attr("xlink:href", "http://tweetfake.com/")
     .append("circle")
     .attr("cx", 460)
     .attr("cy", 450)
     .attr("r", 50)
     .attr("fill", "#92140C");
 
 const faketweet = g12.append("text")
     .attr("x", 460)
     .attr("y", 440)
     .attr("font-size", 15)
     .attr("font-family", "helvetica neue")
     .attr("fill", "white")
     .attr("text-anchor", "middle")
     .attr("pointer-events", "none")
     .text("Fake Tweet");
 
 
 const faketweet2 = g12.append("text")
     .attr("x", 460)
     .attr("y", 460)
     .attr("font-size", 15)
     .attr("font-family", "helvetica neue")
     .attr("fill", "white")
     .attr("text-anchor", "middle")
     .attr("pointer-events", "none")
     .text("Generator");
 
 const g2Appear = g2.attr("transform", "scale(0)")
     .transition()
     .delay(6000)
     .duration(1000)
     .attr("transform", "scale(1)")
/* daphka's new one starts from here */

/* const svgCanvas = d3.select(".pop-up")
    .append("svg")
    .attr("width", width)
    .attr("height", height); */

const g_1 = svgCanvas.append("g");

const follow = g_1.append("text")
    .attr("x", 250)
    .attr("y", 50)
    .attr("font-size", 0)
    .attr("fill", "slategray")
    .attr("font-family", "helvetica neue")
    .attr("text-anchor", "middle")
    .text("DO YOU FOLLOW THESE PEOPLE?")
    .transition()
    .delay(500)
    .duration(1000)
    .attr("font-size", 25);

const donald = g_1.append("image")
    .attr("xlink:href", "data:image/jpeg;base64,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")
    .attr("x", 200)
    .attr("y", 70)
    .attr("height", 0)
    .attr("width", 0)
    .attr("id", "donald")
    .transition()
    .delay(1500)
    .duration(1000)
    .attr("width", 100)
    .attr("height", 100)
    .transition()
    .duration(500)
    .attr("x", 50);

const kanye = g_1.append("image")
    .attr("xlink:href", "data:image/jpeg;base64,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")
    .attr("x", 200)
    .attr("y", 70)
    .attr("height", 0)
    .attr("width", 0)
    .attr("id", "kanye")
    .transition()
    .delay(3000)
    .duration(1000)
    .attr("width", 100)
    .attr("height", 100)
    .transition()
    .duration(500)
    .attr("x", 350);

const shaun = g_1.append("image")
    .attr("xlink:href", "data:image/jpeg;base64,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")
    .attr("x", 200)
    .attr("y", 70)
    .attr("height", 0)
    .attr("width", 0)
    .attr("id", "shaun")
    .transition()
    .delay(4500)
    .duration(1000)
    .attr("width", 100)
    .attr("height", 100);

const resourcesText = g_1.append("text")
    .attr("x", 250)
    .attr("y", 250)
    .attr("text-anchor", "middle")
    .attr("font-size", 0)
    .attr("font-family", "helvetica neue")
    .attr("fill", "slategray")
    .text("IF SO, CHECK OUT THESE INSIGHTFUL")
    .transition()
    .delay(5000)
    .duration(1000)
    .attr("font-size", 25);

const onFactChecking = g_1.append("text")
    .attr("x", 250)
    .attr("y", 280)
    .attr("text-anchor", "middle")
    .attr("font-size", 0)
    .attr("font-family", "helvetica neue")
    .attr("fill", "slategray")
    .text("RESOURCES FOR FACT CHECKING!")
    .transition()
    .delay(5500)
    .duration(1000)
    .attr("font-size", 25);


    let jsonCircles = [
        {
            "x_axis": 300,
            "y_axis": 150,
            "r": 50,
            "color": "lightgray"
        }, {
            "x_axis": 300,
            "y_axis": 300,
            "r": 50,
            "color": "lightgray"
        }, {
            "x_axis": 300,
            "y_axis": 450,
            "r": 50,
            "color": "lightgray"
        }
    ];
    
    // let svgCanvas = d3.select(".circle")
    //                                      .append("svg")
    //                                      .attr("width", 1400)
    //                                      .attr("height", 1000);
                                        
    
    // copied from Daphka
    let g13 = svgCanvas.append("g");
    
    // Creating the circles
    let circles = g13.selectAll("circle")
                            .data(jsonCircles)
                            .enter()
                            .append("circle");
    
    let circleAttributes = circles
                            .attr("cx", function (d) { return d.x_axis; })
                            .attr("cy", function (d) { return d.y_axis; })
                            .attr("r", function (d) { return d.r; })
                            .style("fill", function(d) { return d.color; });
    
    
    // Creating the numbered text
    let textOne = g13.append("text")
                            .attr("x", 130)
                            .attr("y", 190)
                            .attr("font-size", 100)
                            .attr("fill", "gray")
                            .attr("font-style", "italic")
                            .attr("font-weight", 300)
                            .text("1");
    
    let textTwo = g13.append("text")
                        .attr("x", 130)
                        .attr("y", 340)
                        .attr("font-size", 100)
                        .attr("fill", "gray")
                        .attr("font-style", "italic")
                        .attr("font-weight", 300)
                        .text("2");
    
    let textThree = g13.append("text")
                        .attr("x", 130)
                        .attr("y", 490)
                        .attr("font-size", 100)
                        .attr("fill", "gray")
                        .attr("font-style", "italic")
                        .attr("font-weight", 300)
                        .text("3");
    
    // creating the text labels 
    let title = g13.append("text")
                        .attr("x", 120)
                        .attr("y", 0)
                        .attr("font-size", 50)
                        .attr("fill", "orangered")
                        .text("Leader Board");
    
    let rank = g13.append("text")
                        .attr("x", 120)
                        .attr("y", 70)
                        .attr("font-size", 50)
                        .attr("fill", "blue")
                        .text("Rank");
    let user = g13.append("text")
                        .attr("x", 350)
                        .attr("y", 70)
                        .attr("font-size", 50)
                        .attr("fill", "blue")
                        .text("User");
    let points = g13.append("text")
                        .attr("x", 700)
                        .attr("y", 70)
                        .attr("font-size", 50)
                        .attr("fill", "blue")
                        .text("Points");
    // Creating the usernmaes 
    let daphkaUser = g13.append("text")
                        .attr("x", 370)
                        .attr("y", 170)
                        .attr("font-size", 40)
                        .attr("fill", "grey")
                        .text("Daphka Alius");
    
    let daphkaPoints = g13.append("text")
                        .attr("x", 720)
                        .attr("y", 170)
                        .attr("font-size", 45)
                        .attr("fill", "dimgray")
                        .text("10")
                        .attr("font-weight", 500);
    
                    
    let annahUser = g13.append("text")
                        .attr("x", 370)
                        .attr("y", 320)
                        .attr("font-size", 40)
                        .attr("fill", "grey")
                        .text("Anna Kawakami");
    
    let annaPoints = g13.append("text")
                        .attr("x", 725)
                        .attr("y", 320)
                        .attr("font-size", 45)
                        .attr("fill", "dimgray")
                        .text("8")
                        .attr("font-weight", 500);
    
    let anahUser = g13.append("text")
                        .attr("x", 370)
                        .attr("y", 470)
                        .attr("font-size", 40)
                        .attr("fill", "grey")
                        .text("Anah Lewi");
    
    let anahPoints = g13.append("text")
                        .attr("x", 725)
                        .attr("y", 470)
                        .attr("font-size", 45)
                        .attr("fill", "dimgray")
                        .text("7")
                        .attr("font-weight", 500);
    
    // Creating three single lines 
    let lineTop1 = g13.append("line")
                              .attr("x1", 100)
                              .attr("y1", 20)
                              .attr("x2", 900)
                              .attr("y2", 20)
                              .attr("stroke-width", 2)
                              .attr("stroke", "gray");  
    
    let lineTop2 = g13.append("line")
                              .attr("x1", 100)
                              .attr("y1", 75)
                              .attr("x2", 900)
                              .attr("y2", 75)
                              .attr("stroke-width", 2)
                              .attr("stroke", "gray");  
    
    let line1 = g13.append("line")
                              .attr("x1", 100)
                              .attr("y1", 225)
                              .attr("x2", 900)
                              .attr("y2", 225)
                              .attr("stroke-width", 2)
                              .attr("stroke", "lightgray");
    
    let line2 = g13.append("line")
                              .attr("x1", 100)
                              .attr("y1", 375)
                              .attr("x2", 900)
                              .attr("y2", 375)
                              .attr("stroke-width", 2)
                              .attr("stroke", "lightgray");  
    
    let line3 = g13.append("line")
                              .attr("x1", 100)
                              .attr("y1", 525)
                              .attr("x2", 900)
                              .attr("y2", 525)
                              .attr("stroke-width", 2)
                              .attr("stroke", "lightgray");  
    
    // adding pictures for rankings 
    let daphkaPic = g13.append("image")
                              .attr("xlink:href", "daphkaPic.jpg")
                              .attr("x", 250)
                              .attr("y", 105)
                              .attr("width", 100)
                              .attr("height", 100)
                              .attr("border-radius", 50);
    
    let annaPic = g13.append("image")
                              .attr("xlink:href", "annaPic.jpg")
                              .attr("x", 250)
                              .attr("y", 255)
                              .attr("width", 100)
                              .attr("height", 100)
                              .attr("style", "border-radius: 50%");
    
    let anahPic = g13.append("image")
                              .attr("xlink:href", "anahPic.jpeg")
                              .attr("x", 250)
                              .attr("y", 405)
                              .attr("width", 100)
                              .attr("height", 100)   
                              .attr("border-radius", 50);
    let moveg13 = g13.attr("transform", "translate (500,50)");