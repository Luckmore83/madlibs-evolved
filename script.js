
            
            document.getElementById("doneButton").addEventListener("click", function() {
            
            let vehicle = document.getElementById("vehicle").value.trim();
            let adjective = document.getElementById("adjective").value.trim();
            let number = document.getElementById("number").value.trim();
            let tech = document.getElementById("tech").value.trim();
            let explative = document.getElementById("explative").value.trim();
            let location = document.getElementById("location").value.trim();
            let verb = document.getElementById("verb").value.trim();
            let adjective2 = document.getElementById("adjective2").value.trim();
            // Create the story using the user inputs
            const story = `Vi körde ut till skogen i farsans ${vehicle} och försökte hitta en ${adjective} plats vid sjön. 
            Jag hade bl.a. med mig en kortlek, ${number} korvar med korvbröd och ${tech}. Det hann knappt gå 5 min innan vi 
            hörde hur farsan utbrast; ${explative}!!! Han hade 
            glömt grillkolen i ${location}.
            Förutom att vi fick ${verb} råa korvar så var det väldigt ${adjective2}.`;

            // Output the full story
            document.getElementById("storyOutput").innerHTML = story;
            });
