angular.module('specialEd')
// controller for creating multi form in one view one after one
.controller('multiForm', function ($scope){
  $scope.counter=0;

  $scope.questions = [
    {SOCIAL: {
      1: {q: 'withdrawn, aloof, avoids contact with others, or prefers to play alone rather than with peers', value: undefined},
      2: {q: 'parallel play along side but not with peers', value: undefined},
      3: {q: 'difficulty establishing friendships', value: undefined},
      4: {q: 'limited social smile or eye contact (looks away, looks through people, looks at speaker’s mouth, needs to be prompted to make eye contact, or does not make eye contact when communicating)', value: undefined},
      5: {q: 'limited sharing and showing (e.g., does not show a toy to an adult, seek recognition, or share an experience or accomplishment with others)', value: undefined},
      6: {q: 'excessively rigid play with peers (dictates play according to his/her peculiar and repetitive interests and rules)', value: undefined},
      7: {q: 'enjoys physical or sensory play with others (e.g., tickling, chasing) but has limited reciprocal social interaction (e.g., does not play social games or games involving turn taking)', value: undefined},
      8: {q: 'self-absorbed or in own world (e.g., engages in self-stimulating behaviors, talks to self, or fantasizes excessively about things such as movies or cartoons)', value: undefined},
      9: {q: 'oblivious to the presence of others or unresponsive to the social overtures of others', value: undefined},
      10: {q: 'inappropriately talks to or hugs strangers', value: undefined},
      11: {q: 'invades personal space (gets too close to or touches others)', value: undefined},
      12: {q: 'no stranger/separation anxiety when young (not wary of strangers or upset if separated from parents)', value: undefined},
      13: {q: 'socially inappropriate, insensitive comments or behaviors (picks nose in public, asks personal questions)', value: undefined},
      14: {q: 'does not appropriately initiate or sustain peer interaction though may interact well with adults', value: undefined},
      15: {q: 'poor social reasoning (difficulty understanding social cues/comments, facial expressions, body language)', value: undefined},
      16: {q: 'wants to have friends but does not know how to make friends', value: undefined},
    },
    step: 1},
    {PERSEVERATION: {
      1: {q: 'obsessive preoccupations or extreme fixation on things such as certain movies or TV shows (reenacts or watches the same movies over and over), computer games, letters, shapes, numbers, counting, objects or topics (e.g., trains, dinosaurs, NASCAR, maps, planes, electricity, Yu-Gi-Oh, cartoon characters, etc.)', value: undefined},
      2: {q: 'unusual attachment to and holding or hoarding objects (e.g., small figures, string)', value: undefined},
      3: {q: 'repetitive play (e.g., excessively lines up, sorts, spins, or throws objects; opens and closes things repeatedly; plays with the same toys without variation; draws the same pictures repeatedly)', value: undefined},
      4: {q: 'disinterest in toys or lack of normal and varied imaginative play', value: undefined},
      5: {q: 'unusual preoccupation with parts of objects (e.g., repetitively spins wheels on a toy)', value: undefined},
      6: {q: 'distressed by change (e.g., change in routine or schedule, parent takes a different car route home from school, furniture or child’s toys are moved, seasonal change in clothing)', value: undefined},
      7: {q: 'difficulty with transitions (e.g., from one activity to another)', value: undefined},
      8: {q: 'extreme need to finish what he/she starts', value: undefined},
      9: {q: 'idiosyncratic or ritualized patterns (e.g., drinks only from a certain cup, wears only certain clothes, insists that food be arranged a certain way on a plate)', value: undefined},
      10: {q: 'insists that things be in a certain location or a certain way (e.g., doors must be closed, coats zipped, etc.)', value: undefined},
      11: {q: 'insists on doing things the same way every time', value: undefined},
      12: {q: 'overly precise and inflexible, upset if someone breaks a “rule,” rigid and literal thinking', value: undefined},
      13: {q: 'Stereotypies (unusual repetitive movements such as hand flapping when excited, toe walking, body rocking, head shaking, body tensing, teeth clenching, teeth grinding while awake, finger movements, facial grimacing, repeatedly running back and forth, twirling or spinning, pacing, playing with saliva, skin picking)', value: undefined}
    },
    step: 0},

    {SOMATOSENSORY_DISTURBANCE: {
      1: {q: ' Excessive atypical craving and love of spinning, tickling, climbing, rocking, swinging, bouncing, jumping', value: undefined},
      2: {q: ' Unresponsive at times to verbal input (not react when name called or spoken to, hearing questioned)', value: undefined},
      3: {q: 'unusual hypersensitivity to some sounds (e.g., distress or covering ears in response to loud noise, motors, vacuum cleaner, hair dryer, baby crying, sirens, clapping, alarms, toilet flushing, people singing)', value: undefined},
      4: {q: 'unusual hypersensitivity to smell, light, or temperature', value: undefined},
      5: {q: 'Distress with commotion or crowds (uncomfortable/anxious in large groups, theatres, cafeterias, parties)', value: undefined},
      6: {q: ' Extreme fascination with spinning or repetitive movements (e.g., revolving fans, Wheel of Fortune, running water), linear patterns (e.g., credits on TV, window blinds), minute details, lights, shiny surfaces ', value: undefined},
      7: {q: 'excessively smells, mouths, chews, licks, or rubs inanimate objects or surfaces', value: undefined},
      8: {q: 'repetitively visually scrutinizes objects or finger movements close to eyes', value: undefined},
      9: {q: 'places ears against things that vibrate or hum or presses objects against face to an unusual degree', value: undefined},
      10: {q: 'Tactile defensiveness or extreme dislike of: being touched or hugged', value: undefined},
      11: {q: 'Tactile defensiveness or extreme dislike of: touching certain things or getting hands dirty or sticky', value: undefined},
      12: {q: 'Tactile defensiveness or extreme dislike of: water on self or clothes', value: undefined},
      13: {q: 'Tactile defensiveness or extreme dislike of: having face washed, teeth brushed, hair combed, or nails cut', value: undefined},
      14: {q: 'Tactile defensiveness or extreme dislike of: walking in bare feet', value: undefined},
      15: {q: 'Tactile defensiveness or extreme dislike of: clothing that is tight, seams in clothes, or certain textures of clothing', value: undefined},
      16: {q: 'High tolerance for pain (e.g., does not cry when hurt or does not respond normally to painful stimuli)', value: undefined},
      17: {q: 'Sleep disturbance (e.g., difficulty falling asleep, waking during the night, waking early in the morning)', value: undefined},
      18: {q: 'very picky eater, limited food preferences, insists on eating only a few foods', value: undefined},
      19: {q: 'hypersensitivity to textures (e.g., lumps in food)', value: undefined},
      20: {q: 'retains food in mouth without swallowing', value: undefined},
      21: {q: 'eats inedible substances', value: undefined},
      22: {q: 'other peculiar eating patterns (e.g., eats only one brand, color, or shape of a food)', value: undefined}
    },
    step: 0},

    {COMMUNICATION_AND_DEVELOPMENT: {
      1: {q: 'Language regression or slowing at approximately 1 to 2 years of age (e.g., speaking a few words at one year but then losing speech or normal early language development and later language is delayed)', value: undefined},
      2: {q: 'Visual-motor skills (e.g., assembling puzzles, building with Legos, operating the VCR) significantly higher than language skills during the preschool years or walking at a much earlier age than talking', value: undefined},
      3: {q: 'absent or limited communicative speech but gestures to communicate (e.g., pulls an adult by the hand and leads to what wants, hands an object to an adult for assistance, brings a cup to an adult for a drink)', value: undefined},
      4: {q: 'communicates verbally with others only when stressed or needing something', value: undefined},
      5: {q: 'difficulty with reciprocal conversational speech (initiating and sustaining conversations, listening and responding to what others say), talks at people, or one-sided conversations on topics of interest to self', value: undefined},
      6: {q: 'unusual voice quality or modulation (e.g., high pitch, sing song voice, lack of intonation, etc.)', value: undefined},
      7: {q: 'screeches or makes other odd noises (e.g., growls, hums, etc.)', value: undefined},
      8: {q: 'unusual repetitive vocalizations and sounds', value: undefined},
      9: {q: 'idiosyncratic jargon as if talking in own language', value: undefined},
      10: {q: 'echolalia (inappropriately mimics what others say, such as repeating instead of answering a question)', value: undefined},
      11: {q: 'sporadic speech (says a word or phrase once and rarely or never says it again)', value: undefined},
      12: {q: 'excessively recites from movies, cartoons, commercials, etc.', value: undefined},
      13: {q: 'uses rote or memorized phrases that are excessive, out of context, or not relevant ', value: undefined},
      14: {q: 'makes pronoun substitutions (e.g., says “you” when meaning “I”)', value: undefined},
      15: {q: 'excessively repetitive speech and questions', value: undefined},
      16: {q: 'idiosyncratic thoughts and speech (makes up words, nonsensical speech, unique views and perceptions)', value: undefined},
      17: {q: 'exceptional rote memory (e.g., at an unusually young age, identifies numbers, letters, shapes, logos, and colors; sings or hums tunes; memorizes car routes; counts; recites the alphabet; reads; spells; etc.)', value: undefined},
      18: {q: 'phenomenal vocabulary or ability to memorize movies, books, or factual information', value: undefined},
      19: {q: 'remarkable ability to mimic movie or cartoon characters', value: undefined},
      20: {q: 'outstanding visual-mechanical skills (e.g., at an unusually young age, assembles puzzles, matches shapes, operates a computer or VCR, figures out how things work, complex constructions with Legos)', value: undefined},
      21: {q: 'remarkable artistic or musical talent', value: undefined},
      22: {q: 'extremely well-developed gross motor skills with delayed development in other areas (in contrast to highfunctioning children with autism who often have writing or coordination problems)', value: undefined},
      23: {q: 'Overreactivity, irritability, low frustration tolerance, agitation, tantrums, meltdowns, explosiveness, aggression, or self-injurious behavior (distressed by minor events or occurrences most children can tolerate, such as intrusions, activity interruptions, proximity, confinement, performance demands, writing tasks, or when things are not the way the child thinks they should be)', value: undefined},
      24: {q: 'Moodiness and emotional lability (the cause for mood changes may not always apparent, such as laughter or distress for no apparent reason)', value: undefined},
      25: {q: 'Difficulty showing and recognizing emotions, emotionally unresponsive in some situations, lack of empathy or emotional reciprocity (e.g., does not respond appropriately or provide comfort when someone is hurt or sad), or misinterprets the emotions or responses of others ', value: undefined},
      26: {q: 'Unusual fears, such as fear of elevators, steps, toilets, balloons, vacuums, tornadoes', value: undefined}
    },
    step: 0},
    {ATTENTION_AND_SAFETY: {
      1: {q: 'Selective attention, ability to hyperfocus on activities, objects, or topics of interest to self (e.g., lines up toys, spins wheels, watches the same movie, assembles puzzles, builds with Legos, or draws pictures for long periods of time), but is inattentive, impulsive, and fidgety at other times', value: undefined},
      2: {q: 'Limited safety awareness, fearless, or oblivious to danger (e.g., unsafe climbing, wanders about house at night, runs off by self, goes into traffic or water, walks off with strangers)', value: undefined}
    },
    step: 0}
  ]





  $scope.submit = function() {
    alert('form submitted');  
    //console.log($scope.forms)
  }
  
  $scope.nextStep = function() {
    console.log($scope.questions.SOCIAL);
    $scope.questions[$scope.counter].step=0;
    $scope.counter++;
    $scope.questions[$scope.counter].step = 1;
  }
})

