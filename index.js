/*
**Example Text For testing

Sometimes good paragraphing is as simple as letting the 
start of one paragraph serve as the conclusion to the last,
 leaving readers hanging for half a beat. Raffi Khatchadourian
  does this in his essay “The Taste Makers,” writing about 
  the flavor industry.  Khatchadourian tells readers
   about the confidentiality agreements that makers of
    food flavorings sign. The paragraph ends with an 
    example of a company honoring the agreement even 
    years later. Asked about their flavor development 
    for Snapple, the Brooklyn-based flavoring company
     Virginia Dare “refused to discuss the matter.” 
     The next paragraph opens with the broader point:
      “Such secrecy helps shape the story of our food.” 
       Had Khatchadourian ended his previous paragraph with 
       that line, it would be a flat summary.
        At the beginning of the next paragraph,
         however, it sets the trajectory for the next part of the essay.

*/

//Accepts Even Numbers as Total # of Sentences in paragraph
function paragrphier(){

	let text = $('#text').val();
  let sentences = $("#sentences option:selected" ).val();

  const expectedSentenceCount = sentences;
  let overallCount = 0;
  let sentenceCount = 0;
  let previousIndex = 0;

  const totalFullStops = (text.match(/,/g) || []).length;

 	
  $('#sentenceCount').html('Total Number Sentences: '+ totalFullStops);

  let newText = '';

  for(let i = 0; i < text.length; i++){
    let value = text.charAt(i);

    if(sentenceCount == expectedSentenceCount){
      newText += text.substring(previousIndex, i) + '</br></br>';
      previousIndex = i;
      sentenceCount = 0;

      if((totalFullStops - overallCount) < expectedSentenceCount ){
      newText += text.substring(previousIndex, (text.length)) + '</br></br>';
      }
    }

    if(value === '.'){
      sentenceCount += 1;
      overallCount += 1;
    }


  }
  
  
  $('#outputText').html(newText);
  
}