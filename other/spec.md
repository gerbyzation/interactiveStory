# Specification For Fractured

## Analysis

### What kind of story do you want to make? Why?

My story is about someone who wakes up in the hospital and has lost her memory. She tries to recall who she is and what happened. Also I would like to make the user have influence on. 

Some people say the best stories are the one's created by imagination. With my story I want to leave it open-ended so that people will use their imagination to fill in the (rather big) gaps. (why and how) This also enables me to later extend the story and wor

My story won't have a lot of different routes that can be taken, but give the user influence in the order of the scenes and the character. Also I want to randomise the order of the memories to imply the status of fragmented memory. 

### What is your audience? Why?

This game is for a rather general audience. 

## Design

### Summary of your Narrative.

It starts in the hospital. A woman wakes up and can't remember anything, but she knows something has happened. Then she is on a search to find out what happened and who she is. She will come across people who want to know the same, some of them because they care and some don't.

### List your routes and what they are for.

- /: goes to the start page
- /{catagory}/{location} this follows the story, 


### List examples of how people will use your story.

My story is designed to be used on a computer screen, will probably still work fine on tablets with a decent resolution


## Implementation

- Document how you build your product and put it here. Short diary entries will do fine. Include both positive and negative aspects.

21 Januari 9:30: So far I have an idea about what I want to build and made a few sketchdrawings in my notebook. Also I already spend some time looked into the structure of the node server and how the app works, think I have a decent understanding of how it functions. Now working on writing the specification document.

3 Februari 15:50: The last week before Berlin I had an idea for the beginning of the story and kept thinking throughout the week on the rest of the storyline, but got stuck. I think I paid to much attention to how it would look/work in the end instead of taking an iterative approach, creating the base and then keep improving that. Also I had some other idea's which involved video and would make it more into an interactive video, but I couldn't get my hands on a camera. Before Berlin messed around a bit with SVG animations which I hope to use. For now I'm gonna write out some scenario's without fully working out all the fine details and then continuing to build on that.

4 Februari 2:00: I have written some scenes for the story. I want to add a few more later on, but these are not mandatory for this to work so I'm gonna set up the whole thing first. I have worked on getting the templates rendered. Made a few silly mistakes so spend too much the evening trying to get stuff working. That's resolved now, but I haven't been able to get the page rendering working. I've split the locations in 2 objects, so that the memory can be randomised. To make this work I need to alter some things in the code of the app. 

4 Februari 23:00: I have finished implementing the code to support the 2 catagories. The code is now in a seperate file, but doesn't use the OOP because I couldn't get it to work. It didn't recognise the constructor function, so the file might not have been imported in the right way? But since it's a custom module I can't find a lot of help on the internet about it Now it's just using prototypes and works fine again. (Why do we even need OOP in JS? It's just wasting my time). I had hoped to be past the code and to have done some work tonight on the design of the story, but because of the issues with seperating the code I didn't get around to that.

5 Februari 12.00: I tried again to get the OOP working, but without success. THe file seems to give no errors, but still the superclass methods are used instead of the subclass. Send Will an email and will stick with overwriting the methods via the prototype way for now. 

5 Februari 14.30: I have choosen a fontpair from Google Fonts which I want to use. Also I found a website with some free images under CC0 license. 

6 Februari 14.00: I'm not feeling to well and very tired, so I didn't manage to work on any more in the evening. Now just continuing styling and making minor adjustments to code. Have made sure the random selection doesn't select the current page as an option as well. Also trying to get the heartbeat SVG animation I made to work on the first page.

6 Februari 16.00: The animation isn't working out very well yet, would need to tweak the settings and I can't be bothered now with all the other stuff still left to do. 

## Testing

- Who are you going to show your product to?

Coursemates/lecturer(s)

- What do you want to test?

Primarily the functionality of the code.
Secondary I want to know how people experience the story

- What feedback are you expecting?

I expect I will get some feedback on the story, which doesn't really have an ending and might be experienced as incoherent

- What feedback did you get (good and bad)?

Simon Lock:
Nice atmospheric experience, hangs together well
Would have been nice to have had some images in the hospital
was a bit worried about the lumberjack's dead girlfriend
Some of the narratives were a bit hard to follow - leaving them open to interpretation was interesting

Rob Stenhouse:
i like the images used in the story , the story seemed to keep looping without a ending aviable on certain parts, the story idea was good and very interesting. some of the text over the images was a little hard to read all in all a good story

daniel lillie: 
very nice graphics. Images are super high resolution. The LOOP OF THE STORY IS DISTURBING. The font goes very nice with the graphic. loving the style . awesome work. looking forward for the heart rate animation. quite short for this kind of narrative story. overall is great to experience.

James Parker

Lovely Atmosphere created by the story, keeps the story "moving", good use of pictures, the never-ending tale was a curious way to tell the story, overall, very enjoyable.

James Harris:

Very nicely designed story. I love the fade ins and the transparent menu above the images. The story itself was good too, I actually read all of it unlike other stories. It was not a long chunk to read which kept me interested. Really cool overall but it could be longer.



- What changes are you going to make based on your feedback? 


