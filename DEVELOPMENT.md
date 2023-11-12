## Development Process

This section details the series of instructions provided to ChatGPT for the creation of the Time Timer application. It showcases the iterative process of development and problem-solving.

### Basic Question About Drawing a Sector Pie with HTML
- "I want to create an application with HTML, JS, and CSS. First, how can I make a sector of a pie chart? Is it with CSS, or do I need to use JS?"

### ChatGPT Clarification to Help Choose Between SVG or Canvas
- "Then I need to be able to change the radius of the sector... What is better, HTML, SVG, or canvas?"

### Provide Explanation About What I Want to Build (ChatGPT Will Recommend SVG)
- "I just want to make a complete sector that covers the entire circle in red, that is, with a radius of 360 degrees, and that this radius reduces to zero. It's like a sector of a pie chart that occupies 100% and then reduces to 0%, while maintaining the radius clear. I want it to follow the clockwise direction, that is, when it is complete, a full circle is seen, and it opens up as the clock hand moves. It starts from 12 (100%) and expands until it returns to 12 (0%). What do you recommend I use for this case?"

### Asks for HTML Code. It Won't Work at First Try. It Will Need Further Rectifications Because of My Lack of Accuracy Explaining My Goal.
- "Give me the HTML code to put this example."
- "It's not going well, I see a full circle, and suddenly after a while, only the edge of the circumference is seen, it's not gradual."
- "Okay, it's almost coming out but not quite right. In the beginning, the circle is not seen, then it starts like the clock hands, but the sector begins to grow. When it should appear a complete sector that occupies the whole circle and is gradually reducing. Also, when it passes 50% (6 in the evening), the circle suddenly displaces."
- "Now it goes in the opposite direction to the clock hands, and each quarter of the sector does something strange. Can we start again with clean code, both in HTML and JS?"
- "It's not right. The sector starts at 25%. Between 25% and 50% it does well. Between 50% and 75%, the circle gradually moves its center to the left and escapes."
- "Now it goes against the clock hands, and each 90-degree segment does something different. It's not consistent. Something is not correct."
- "The same, it starts with 25% of the sector already filled. And it starts from 3 (clockwise). But it has to start from 12 (clockwise) and with 100% filled."
- "Now the animation is correct, it starts at 12, and ends at 12 again. The animation is correct but the circle starts empty (transparent) and paints as it progresses. But the behavior should be that the circle starts totally opaque, and as it progresses, it disappears."

### Add Alarm Sound
- "Now I want it to play a sound when it finishes."

### I Downloaded an Alarm Sound from the Internet
### But I Want to Make Sound Alarm Shorter with FFmpeg
- "How do I use FFmpeg to shorten an MP3 to the first 9 seconds and have it end with a fade to silence?"

### SVG Is Not Centered. I Want It in the Middle of the Screen
- "How can I make the SVG centered on the screen?"
- "How can I put a background image, behind the SVG? And also have it centered?"
- "And how do I make the circle smaller?"

### Customize Sector
- "How do I make the SVG dark red and transparent at 60%?"

### Knob
- "Now I want to put a PNG on top of the sector, which is right in the center and rotates at the same speed as the sector advances."

### Troubleshooting Knob
### Adjust Timer on the Phone with Hand Gestures
- "I have this final JS code, I want to add a finger gesture for mobile, that works just like the mouse. If you press and hold it configures the timer, but if you release it does not. Can you give me the events to add to the JS?"

### Add Application to Phone
- "Give me the manifest file to make this app installable on a phone."

### Bug. Page Shouldn't Scroll at All.
- "When I install it and try to manipulate the minute hand, the screen scrolls a bit. Is it possible to do something in HTML or JS so that the screen cannot scroll?"

### Improve README.md
- "Make this README more informal, fun, and enjoyable, with emojis and so on..."
- "Not so informal, something in between, please."