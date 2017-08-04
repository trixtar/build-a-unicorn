## Some decisions I took when writing this code.

1. In order to obtain the background image, I extracted the gradient layer from the .pdf source and exported it to .png using Inkscape.

2. The @extend method to add Materialize's own classes to HTML elements makes the page very hard to edit since I have no visual clues on which classes I have assigned to each element. I'll use the regular method and assign classes directly on my HTML code. 

3. Form inputs seem a bit tricky to edit, especially the range picker. I'm going for the basic layout and fix this minor detailes later.

4. After testing the site on both Chrome & Mozilla, it seems media queries aren't necessary since the site appears to be 100% responsive. Hooray!

5. Tried importing the JSON file into a variable with an Ajax call, but it led to a cross-origin request error. Since, I need a server, I set up a Node.js server and imported my site into it, updated paths and was finally able to get the local JSON file data with a simple $.getJSON()

6. Decided to use Materialize's own HTML tools for form validation.

7. Serialized the form data into a JSON string to be displayed on the browser's console for testing purposes.

8. Added toaster dialogs to give interaction feedback to users.

9. Wrote a short media query to ensure proper alert rendering on mobile devices.

10. Added some accessibility-friendly labels.

11. Tested on an older computer with a smaller screen to make final adjustments.