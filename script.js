/* =====================================================
   VERBAL TRACKER
   Subject-Verb Agreement
===================================================== */


/* ================================
   RULE DATA
================================ */

const rules = [

  {
    id: 1,
    category: "basic",
    title: "Singular Subject → Singular Verb",
    description:
      "A singular subject normally takes a singular verb in the present tense.",
    example:
      "He <strong>works</strong> hard every day.",
    trap:
      "Do not write: He work hard."
  },

  {
    id: 2,
    category: "basic",
    title: "Plural Subject → Plural Verb",
    description:
      "A plural subject normally takes a plural verb.",
    example:
      "They <strong>work</strong> hard every day.",
    trap:
      "Remember: He works, but they work."
  },

  {
    id: 3,
    category: "compound",
    title: "Subjects Joined by AND",
    description:
      "Two subjects joined by AND normally take a plural verb.",
    example:
      "Ram and Shyam <strong>are</strong> friends.",
    trap:
      "A + and + B normally means more than one subject."
  },

  {
    id: 4,
    category: "compound",
    title: "AND Referring to One Idea",
    description:
      "Sometimes two nouns joined by AND represent one combined idea or unit.",
    example:
      "Bread and butter <strong>is</strong> my breakfast.",
    trap:
      "Check whether the two nouns represent one combined concept."
  },

  {
    id: 5,
    category: "pronoun",
    title: "EACH Takes a Singular Verb",
    description:
      "Each is grammatically singular, even when followed by a plural noun.",
    example:
      "Each of the students <strong>is</strong> ready.",
    trap:
      "Do not let the plural noun after 'of' control the verb."
  },

  {
    id: 6,
    category: "pronoun",
    title: "EVERY Takes a Singular Verb",
    description:
      "Every is followed by a singular verb.",
    example:
      "Every candidate <strong>has</strong> an ID card.",
    trap:
      "Every students is incorrect."
  },

  {
    id: 7,
    category: "pronoun",
    title: "EVERY + A AND B",
    description:
      "Every followed by two nouns joined by AND still takes a singular verb.",
    example:
      "Every boy and girl <strong>has</strong> an ID card.",
    trap:
      "The presence of AND does not make the verb plural here."
  },

  {
    id: 8,
    category: "compound",
    title: "EITHER...OR",
    description:
      "The verb generally agrees with the subject closest to it.",
    example:
      "Either Ram or his friends <strong>are</strong> coming.",
    trap:
      "Look at the subject immediately before the verb."
  },

  {
    id: 9,
    category: "compound",
    title: "NEITHER...NOR",
    description:
      "The verb generally agrees with the nearer subject.",
    example:
      "Neither the teacher nor the students <strong>are</strong> ready.",
    trap:
      "The nearer subject is students, so use are."
  },

  {
    id: 10,
    category: "compound",
    title: "NOT ONLY...BUT ALSO",
    description:
      "The verb generally agrees with the nearer subject.",
    example:
      "Not only the students but also the teacher <strong>is</strong> present.",
    trap:
      "Check the subject closest to the verb."
  },

  {
    id: 11,
    category: "phrase",
    title: "AS WELL AS",
    description:
      "As well as does not normally change the number of the main subject.",
    example:
      "The teacher, as well as the students, <strong>is</strong> present.",
    trap:
      "Do not treat 'as well as' like AND."
  },

  {
    id: 12,
    category: "phrase",
    title: "ALONG WITH",
    description:
      "Along with introduces additional information and does not change the main subject.",
    example:
      "The captain, along with the players, <strong>is</strong> attending.",
    trap:
      "The main subject is captain."
  },

  {
    id: 13,
    category: "phrase",
    title: "TOGETHER WITH",
    description:
      "Together with does not change the number of the main subject.",
    example:
      "The manager, together with his assistants, <strong>has</strong> arrived.",
    trap:
      "Ignore the additional phrase while choosing the verb."
  },

  {
    id: 14,
    category: "quantity",
    title: "A NUMBER OF",
    description:
      "A number of means many and takes a plural verb.",
    example:
      "A number of students <strong>are</strong> absent.",
    trap:
      "A number → plural verb."
  },

  {
    id: 15,
    category: "quantity",
    title: "THE NUMBER OF",
    description:
      "The number refers to the total count and takes a singular verb.",
    example:
      "The number of students <strong>is</strong> increasing.",
    trap:
      "The number → singular verb."
  },

  {
    id: 16,
    category: "quantity",
    title: "ONE OF + PLURAL NOUN",
    description:
      "One of is followed by a plural noun, but the subject is ONE.",
    example:
      "One of the students <strong>has</strong> won the prize.",
    trap:
      "The verb agrees with 'one', not 'students'."
  },

  {
    id: 17,
    category: "noun",
    title: "Collective Nouns",
    description:
      "A collective noun treated as one unit normally takes a singular verb.",
    example:
      "The team <strong>is</strong> ready.",
    trap:
      "Team, committee, family and class can behave as singular units."
  },

  {
    id: 18,
    category: "noun",
    title: "Uncountable Nouns",
    description:
      "Uncountable nouns normally take singular verbs.",
    example:
      "The information <strong>is</strong> useful.",
    trap:
      "Information, advice and furniture are not normally pluralized."
  },

  {
    id: 19,
    category: "noun",
    title: "NEWS",
    description:
      "News looks plural but is grammatically singular.",
    example:
      "The news <strong>is</strong> good.",
    trap:
      "Never use 'news are' in standard agreement."
  },

  {
    id: 20,
    category: "noun",
    title: "Mathematics / Physics / Economics",
    description:
      "These academic subjects end in -s but normally take singular verbs.",
    example:
      "Mathematics <strong>is</strong> difficult.",
    trap:
      "The final 's' does not automatically make the subject plural."
  },

  {
    id: 21,
    category: "noun",
    title: "Plural-Looking Singular Nouns",
    description:
      "Some nouns look plural but function grammatically as singular nouns.",
    example:
      "Economics <strong>is</strong> interesting.",
    trap:
      "Focus on grammatical number, not only the spelling."
  },

  {
    id: 22,
    category: "noun",
    title: "Scissors / Trousers / Spectacles",
    description:
      "These nouns are normally treated as plural.",
    example:
      "The scissors <strong>are</strong> sharp.",
    trap:
      "These nouns generally require plural verbs."
  },

  {
    id: 23,
    category: "noun",
    title: "A PAIR OF",
    description:
      "A pair is singular, so it normally takes a singular verb.",
    example:
      "A pair of scissors <strong>is</strong> on the table.",
    trap:
      "The noun scissors does not control the verb here."
  },

  {
    id: 24,
    category: "advanced",
    title: "THERE IS / THERE ARE",
    description:
      "The verb agrees with the actual subject following the existential construction.",
    example:
      "There <strong>are</strong> five books on the table.",
    trap:
      "Do not automatically choose 'is' after there."
  },

  {
    id: 25,
    category: "advanced",
    title: "HERE IS / HERE ARE",
    description:
      "The verb agrees with the noun that follows the construction.",
    example:
      "Here <strong>are</strong> your books.",
    trap:
      "Check whether the following subject is singular or plural."
  },

  {
    id: 26,
    category: "phrase",
    title: "Subject + Prepositional Phrase",
    description:
      "Words inside phrases beginning with of, with, etc. do not necessarily control the verb.",
    example:
      "The list of candidates <strong>is</strong> ready.",
    trap:
      "The main subject is list, not candidates."
  },

  {
    id: 27,
    category: "phrase",
    title: "THE QUALITY OF",
    description:
      "The verb agrees with the head noun before the prepositional phrase.",
    example:
      "The quality of these products <strong>is</strong> excellent.",
    trap:
      "Products is not the main subject."
  },

  {
    id: 28,
    category: "quantity",
    title: "Measurements as One Unit",
    description:
      "Time, distance or money treated as one total amount normally takes a singular verb.",
    example:
      "Ten kilometers <strong>is</strong> a long distance.",
    trap:
      "The plural-looking measurement can still represent one unit."
  },

  {
    id: 29,
    category: "quantity",
    title: "Percentages",
    description:
      "With percentages, agreement depends on the noun following OF.",
    example:
      "50% of the students <strong>are</strong> absent.",
    trap:
      "Look at students, not at 50%."
  },

  {
    id: 30,
    category: "quantity",
    title: "Fractions",
    description:
      "Fractions follow the number of the noun after OF.",
    example:
      "Half of the students <strong>are</strong> absent.",
    trap:
      "Half of the cake is, but half of the students are."
  },

  {
    id: 31,
    category: "advanced",
    title: "Gerund as Subject",
    description:
      "A gerund phrase functioning as a subject normally takes a singular verb.",
    example:
      "Reading books <strong>is</strong> useful.",
    trap:
      "The phrase represents one activity."
  },

  {
    id: 32,
    category: "advanced",
    title: "Infinitive as Subject",
    description:
      "An infinitive phrase functioning as a subject normally takes a singular verb.",
    example:
      "To learn programming <strong>requires</strong> patience.",
    trap:
      "The complete infinitive phrase is treated as one subject."
  },

  {
    id: 33,
    category: "advanced",
    title: "Relative Pronoun WHO / WHICH / THAT",
    description:
      "The verb after a relative pronoun agrees with its antecedent.",
    example:
      "She is the student who <strong>works</strong> hard.",
    trap:
      "Identify what WHO or THAT refers to."
  },

  {
    id: 34,
    category: "pronoun",
    title: "EACH OF / EITHER OF / NEITHER OF",
    description:
      "Each, either and neither are generally singular.",
    example:
      "Neither of the answers <strong>is</strong> correct.",
    trap:
      "Do not let the plural noun after OF control the verb."
  },

  {
    id: 35,
    category: "pronoun",
    title: "EVERYONE / EVERYBODY / EVERYTHING",
    description:
      "These indefinite pronouns are grammatically singular.",
    example:
      "Everyone <strong>is</strong> ready.",
    trap:
      "Everyone means every person, but grammatically it is singular."
  },

  {
    id: 36,
    category: "pronoun",
    title: "MANY / FEW / SEVERAL",
    description:
      "These expressions normally refer to plural countable nouns and take plural verbs.",
    example:
      "Several candidates <strong>have</strong> applied.",
    trap:
      "Many, few and several normally require plural agreement."
  },

  {
    id: 37,
    category: "quantity",
    title: "MUCH / LITTLE",
    description:
      "Much and little generally refer to uncountable quantities and take singular verbs.",
    example:
      "Much of the work <strong>is</strong> complete.",
    trap:
      "Check whether the noun is an uncountable quantity."
  },

  {
    id: 38,
    category: "advanced",
    title: "MORE THAN ONE",
    description:
      "More than one + singular noun generally takes a singular verb.",
    example:
      "More than one student <strong>has</strong> failed.",
    trap:
      "Despite the meaning, standard agreement is singular."
  },

  {
    id: 39,
    category: "advanced",
    title: "MANY A + SINGULAR NOUN",
    description:
      "Many a is followed by a singular noun and singular verb.",
    example:
      "Many a student <strong>has</strong> faced this problem.",
    trap:
      "Many a student, not many a students."
  },

  {
    id: 40,
    category: "quantity",
    title: "A LOT OF / LOTS OF / PLENTY OF",
    description:
      "The verb depends on whether the noun after OF is plural or uncountable.",
    example:
      "A lot of students <strong>are</strong> absent. A lot of money <strong>is</strong> required.",
    trap:
      "Look at the noun after OF."
  }

];

/* =====================================================
   PREPOSITION RULES
===================================================== */

const prepositionRules = [

  {
    id: 1,
    category: "time",
    title: "AT — Exact Time",
    description:
      "AT is used with exact or specific points of time.",
    example:
      "The class starts <strong>at 9 AM</strong>.",
    trap:
      "Use AT for exact time, not IN."
  },

  {
    id: 2,
    category: "time",
    title: "IN — Months, Years & Long Periods",
    description:
      "IN is used with months, years, seasons and longer periods.",
    example:
      "I was born <strong>in 2004</strong>.",
    trap:
      "Use IN for years and months."
  },

  {
    id: 3,
    category: "time",
    title: "ON — Days and Dates",
    description:
      "ON is used with specific days and dates.",
    example:
      "The exam is <strong>on Monday</strong>.",
    trap:
      "Monday → ON, not IN."
  },

  {
    id: 4,
    category: "time",
    title: "AT vs ON vs IN",
    description:
      "AT is used for exact time, ON for days/dates and IN for longer periods.",
    example:
      "at 5 PM, <strong>on Monday</strong>, <strong>in July</strong>.",
    trap:
      "Remember: AT → point, ON → day/date, IN → period."
  },

  {
    id: 5,
    category: "time",
    title: "SINCE — Starting Point",
    description:
      "SINCE indicates the point from which an action or state began.",
    example:
      "I have lived here <strong>since 2020</strong>.",
    trap:
      "Since 2020, since Monday, since morning."
  },

  {
    id: 6,
    category: "time",
    title: "FOR — Duration",
    description:
      "FOR is used to express the length or duration of time.",
    example:
      "I have lived here <strong>for six years</strong>.",
    trap:
      "Since = starting point; For = duration."
  },

  {
    id: 7,
    category: "time",
    title: "FROM — Starting Point",
    description:
      "FROM commonly indicates a starting point, especially when an endpoint is mentioned.",
    example:
      "The office is open <strong>from 9 AM to 6 PM</strong>.",
    trap:
      "FROM is commonly paired with TO."
  },

  {
    id: 8,
    category: "time",
    title: "BY vs UNTIL",
    description:
      "BY indicates a deadline, while UNTIL indicates continuation up to a time.",
    example:
      "Submit it <strong>by Monday</strong>. I will wait <strong>until Monday</strong>.",
    trap:
      "BY = deadline; UNTIL = continuing action."
  },

  {
    id: 9,
    category: "time",
    title: "BEFORE vs AGO",
    description:
      "BEFORE refers to an earlier point, while AGO expresses time measured backwards from now.",
    example:
      "I met him two years <strong>ago</strong>.",
    trap:
      "Present reference + duration → AGO."
  },

  {
    id: 10,
    category: "time",
    title: "DURING vs FOR",
    description:
      "DURING refers to a period/event; FOR refers to duration.",
    example:
      "I slept <strong>during the movie</strong> for two hours.",
    trap:
      "During the meeting; for two hours."
  },

  {
    id: 11,
    category: "comparison",
    title: "BETWEEN vs AMONG",
    description:
      "BETWEEN is commonly used for two identified entities, while AMONG refers to a group.",
    example:
      "Divide the money <strong>between</strong> Ram and Shyam.",
    trap:
      "Basic exam rule: BETWEEN → two; AMONG → group."
  },

  {
    id: 12,
    category: "comparison",
    title: "BESIDE vs BESIDES",
    description:
      "BESIDE means next to; BESIDES means in addition to.",
    example:
      "He sat <strong>beside</strong> me. <strong>Besides</strong> English, he knows Hindi.",
    trap:
      "Beside = next to; Besides = additionally."
  },

  {
    id: 13,
    category: "place",
    title: "IN vs INTO",
    description:
      "IN generally indicates position; INTO indicates movement towards the inside.",
    example:
      "He is <strong>in</strong> the room. He went <strong>into</strong> the room.",
    trap:
      "Position → IN; movement inside → INTO."
  },

  {
    id: 14,
    category: "place",
    title: "ON vs ONTO",
    description:
      "ON generally indicates position; ONTO indicates movement to a position.",
    example:
      "The book is <strong>on</strong> the table. He jumped <strong>onto</strong> the table.",
    trap:
      "Movement onto a surface → ONTO."
  },

  {
    id: 15,
    category: "place",
    title: "AT vs TO",
    description:
      "AT generally indicates location; TO indicates movement or destination.",
    example:
      "He is <strong>at</strong> the station. He went <strong>to</strong> the station.",
    trap:
      "Location → AT; destination → TO."
  },

  {
    id: 16,
    category: "place",
    title: "IN vs AT for Place",
    description:
      "IN commonly emphasizes being inside an area, while AT commonly identifies a point or location.",
    example:
      "She is <strong>in</strong> the office. She is <strong>at</strong> the office.",
    trap:
      "Context determines whether inside or location is emphasized."
  },

  {
    id: 17,
    category: "fixed",
    title: "BY vs WITH",
    description:
      "BY commonly indicates an agent or means; WITH commonly indicates an instrument.",
    example:
      "The book was written <strong>by</strong> Rahul <strong>with</strong> a pen.",
    trap:
      "Agent → BY; instrument → WITH."
  },

  {
    id: 18,
    category: "place",
    title: "BY + Transport",
    description:
      "BY is used to express the general means of transportation.",
    example:
      "I travelled <strong>by train</strong>.",
    trap:
      "No article is normally used after BY in this construction."
  },

  {
    id: 19,
    category: "place",
    title: "ON + Public Transport",
    description:
      "ON is used when referring to being aboard public transport.",
    example:
      "I met him <strong>on the train</strong>.",
    trap:
      "BY train = means; ON the train = aboard."
  },

  {
    id: 20,
    category: "time",
    title: "BY as a Deadline",
    description:
      "BY means not later than a specified time.",
    example:
      "Complete the work <strong>by tomorrow</strong>.",
    trap:
      "BY does not mean that the action continues until that time."
  },

  {
    id: 21,
    category: "comparison",
    title: "ABOVE vs OVER",
    description:
      "Both can indicate a higher position, but OVER can also suggest direct position, covering or movement across.",
    example:
      "The picture is <strong>above</strong> the sofa.",
    trap:
      "Context determines the more natural choice."
  },

  {
    id: 22,
    category: "comparison",
    title: "BELOW vs UNDER",
    description:
      "BELOW indicates a lower level; UNDER commonly indicates a position directly beneath something.",
    example:
      "The temperature is <strong>below</strong> zero. The cat is <strong>under</strong> the table.",
    trap:
      "Think level → BELOW; directly beneath → UNDER."
  },

  {
    id: 23,
    category: "place",
    title: "ACROSS vs THROUGH",
    description:
      "ACROSS indicates movement from one side to another; THROUGH indicates movement within and out of something.",
    example:
      "He walked <strong>across</strong> the road and <strong>through</strong> the forest.",
    trap:
      "Across = side to side; through = inside a passage/space."
  },

  {
    id: 24,
    category: "place",
    title: "ALONG",
    description:
      "ALONG indicates movement following a line, route or path.",
    example:
      "We walked <strong>along</strong> the river.",
    trap:
      "Think of following a route or line."
  },

  {
    id: 25,
    category: "place",
    title: "TOWARDS vs TO",
    description:
      "TO indicates a destination; TOWARDS indicates direction without necessarily confirming arrival.",
    example:
      "He walked <strong>towards</strong> the station.",
    trap:
      "Towards does not necessarily mean the destination was reached."
  },

  {
    id: 26,
    category: "fixed",
    title: "FROM — Source or Origin",
    description:
      "FROM indicates source, origin or separation.",
    example:
      "This train comes <strong>from</strong> Mumbai.",
    trap:
      "FROM answers the question 'where did it originate?'"
  },

  {
    id: 27,
    category: "fixed",
    title: "OF",
    description:
      "OF can express possession, relationship, material, quantity or part.",
    example:
      "A cup <strong>of</strong> tea.",
    trap:
      "OF has several relationships, so read the complete context."
  },

  {
    id: 28,
    category: "fixed",
    title: "ABOUT",
    description:
      "ABOUT is commonly used to indicate the topic or subject being discussed.",
    example:
      "We talked <strong>about</strong> the interview.",
    trap:
      "ABOUT commonly introduces a topic."
  },

  {
    id: 29,
    category: "fixed",
    title: "FOR — Purpose or Benefit",
    description:
      "FOR can indicate purpose, intended use or the person who benefits.",
    example:
      "This gift is <strong>for</strong> you.",
    trap:
      "Ask: intended for whom or for what purpose?"
  },

  {
    id: 30,
    category: "fixed",
    title: "WITH",
    description:
      "WITH can indicate association, company or an instrument.",
    example:
      "I went <strong>with</strong> my friend.",
    trap:
      "WITH can indicate being together with someone."
  },

  {
    id: 31,
    category: "fixed",
    title: "WITHOUT",
    description:
      "WITHOUT indicates absence of something.",
    example:
      "He left <strong>without</strong> his phone.",
    trap:
      "WITHOUT means in the absence of."
  },

  {
    id: 32,
    category: "fixed",
    title: "AGAINST",
    description:
      "AGAINST can indicate opposition or physical contact/support.",
    example:
      "India played <strong>against</strong> Australia.",
    trap:
      "AGAINST can express opposition or contact."
  },

  {
    id: 33,
    category: "common",
    title: "DESPITE / IN SPITE OF",
    description:
      "Both indicate contrast and are followed by a noun, pronoun or gerund.",
    example:
      "<strong>Despite</strong> the rain, we went outside.",
    trap:
      "Never use 'despite of'."
  },

  {
    id: 34,
    category: "common",
    title: "BECAUSE vs BECAUSE OF",
    description:
      "BECAUSE is followed by a clause; BECAUSE OF is followed by a noun or noun phrase.",
    example:
      "We stayed home <strong>because it was raining</strong>. We stayed home <strong>because of the rain</strong>.",
    trap:
      "Clause → BECAUSE; noun/phrase → BECAUSE OF."
  },

  {
    id: 35,
    category: "fixed",
    title: "ACCORDING TO",
    description:
      "ACCORDING TO introduces information or an opinion attributed to a source.",
    example:
      "<strong>According to</strong> the report, sales increased.",
    trap:
      "It commonly introduces the source of information."
  },

  {
    id: 36,
    category: "common",
    title: "IN ADDITION TO",
    description:
      "IN ADDITION TO means besides or as well as.",
    example:
      "<strong>In addition to</strong> English, he knows French.",
    trap:
      "It is followed by a noun, pronoun or gerund."
  },

  {
    id: 37,
    category: "common",
    title: "INSTEAD OF",
    description:
      "INSTEAD OF indicates replacement or substitution.",
    example:
      "He drank tea <strong>instead of</strong> coffee.",
    trap:
      "It commonly introduces the alternative chosen or considered."
  },

  {
    id: 38,
    category: "common",
    title: "USED TO vs BE USED TO",
    description:
      "USED TO + base verb expresses a past habit; BE USED TO + noun/gerund means accustomed to.",
    example:
      "I <strong>used to play</strong> cricket. I am <strong>used to playing</strong> cricket.",
    trap:
      "BE USED TO is followed by a noun or gerund."
  },

  {
    id: 39,
    category: "fixed",
    title: "Common Verb + Preposition Combinations",
    description:
      "Many verbs require specific prepositions in standard usage.",
    example:
      "Depend <strong>on</strong>, listen <strong>to</strong>, wait <strong>for</strong>, focus <strong>on</strong>.",
    trap:
      "Do not translate fixed combinations directly from Hindi."
  },

  {
    id: 40,
    category: "common",
    title: "Common Preposition Errors",
    description:
      "Some verbs do not normally take an unnecessary preposition in standard English.",
    example:
      "Discuss the problem. Reach Delhi. Mention the issue. Emphasize the point.",
    trap:
      "Avoid: discuss about, reach to, mention about, emphasize on."
  }

];
// =====================================================
// TENSE RULES — INFOSYS SYSTEM ENGINEER
// =====================================================

const tenseRules = [

  // ================= PRESENT =================

  {
    id: 1,
    category: "present",
    title: "Habit / Routine → Simple Present",
    description:
      "Daily habits, routines and repeated actions generally use the Simple Present tense.",
    example:
      "He goes to college every day.",
    trap:
      "He / She / It ke saath V1 + s/es use hota hai."
  },

  {
    id: 2,
    category: "present",
    title: "Universal Fact → Simple Present",
    description:
      "Universal truths, scientific facts and permanent facts use Simple Present.",
    example:
      "The Sun rises in the east.",
    trap:
      "Fact hone par Present Continuous mat use karo."
  },

  {
    id: 3,
    category: "present",
    title: "Do / Does + V1",
    description:
      "Negative and interrogative sentences with do/does always take the base form V1.",
    example:
      "He does not go there.",
    trap:
      "❌ He does not goes there."
  },

  {
    id: 4,
    category: "present",
    title: "Timetable / Schedule → Simple Present",
    description:
      "Fixed schedules and timetables can use Simple Present even when referring to the future.",
    example:
      "The train leaves at 6 PM tomorrow.",
    trap:
      "Future meaning hone ke baad bhi scheduled event mein Simple Present aa sakta hai."
  },

  {
    id: 5,
    category: "present",
    title: "Action Happening Now → Present Continuous",
    description:
      "Actions happening at the moment of speaking use am/is/are + V-ing.",
    example:
      "She is studying now.",
    trap:
      "Signal words: now, currently, at present, at the moment."
  },

  {
    id: 6,
    category: "present",
    title: "Temporary Action → Present Continuous",
    description:
      "Temporary situations or actions happening around the present time use Present Continuous.",
    example:
      "I am staying with my friend this week.",
    trap:
      "Permanent situation ke liye generally Simple Present."
  },

  {
    id: 7,
    category: "present",
    title: "Stative Verbs → Normally Not Continuous",
    description:
      "Verbs like know, believe, understand, own, belong, need and want generally do not use continuous forms.",
    example:
      "I know him.",
    trap:
      "❌ I am knowing him."
  },

  {
    id: 8,
    category: "present",
    title: "Present Perfect → has/have + V3",
    description:
      "Present Perfect is formed using has/have + past participle V3.",
    example:
      "She has completed the assignment.",
    trap:
      "He/She/It → has; I/You/We/They → have."
  },

  {
    id: 9,
    category: "present",
    title: "Just / Already / Yet → Present Perfect",
    description:
      "Just, already and yet commonly indicate Present Perfect in completed recent actions.",
    example:
      "He has just arrived.",
    trap:
      "❌ He has just arrive."
  },

  {
    id: 10,
    category: "present",
    title: "Since + Starting Point",
    description:
      "Since is used with a specific starting point of time.",
    example:
      "He has lived here since 2020.",
    trap:
      "Since 2020, since Monday, since morning, since 5 PM."
  },

  {
    id: 11,
    category: "present",
    title: "For + Duration",
    description:
      "For is used to indicate the length or duration of an action.",
    example:
      "He has worked here for five years.",
    trap:
      "For = duration; Since = starting point."
  },

  {
    id: 12,
    category: "present",
    title: "Unfinished Time → Present Perfect",
    description:
      "Present Perfect can be used when the time period is still continuing.",
    example:
      "I have completed three tasks today.",
    trap:
      "Yesterday is finished time → Simple Past."
  },

  // ================= PAST =================

  {
    id: 13,
    category: "past",
    title: "Completed Past Action → Simple Past",
    description:
      "Completed actions in the past generally use V2.",
    example:
      "He visited Delhi yesterday.",
    trap:
      "Yesterday strongly indicates Simple Past."
  },

  {
    id: 14,
    category: "past",
    title: "Yesterday / Ago / Last → Simple Past",
    description:
      "Completed actions with yesterday, ago or last generally use Simple Past.",
    example:
      "She met him yesterday.",
    trap:
      "❌ She has met him yesterday."
  },

  {
    id: 15,
    category: "past",
    title: "Did + V1",
    description:
      "After did or did not, always use the base form V1.",
    example:
      "He did not come yesterday.",
    trap:
      "❌ He did not came yesterday."
  },

  {
    id: 16,
    category: "past",
    title: "Past Continuous → was/were + V-ing",
    description:
      "Past Continuous describes an action that was in progress at a particular past time.",
    example:
      "I was studying at 8 PM.",
    trap:
      "I/He/She/It → was; You/We/They → were."
  },

  {
    id: 17,
    category: "past",
    title: "Interrupted Past Action",
    description:
      "An ongoing past action commonly uses Past Continuous while the interrupting action uses Simple Past.",
    example:
      "I was sleeping when he called.",
    trap:
      "Long/ongoing action → was/were + V-ing."
  },

  {
    id: 18,
    category: "past",
    title: "While + Past Continuous",
    description:
      "While commonly introduces an action that was continuing in the past.",
    example:
      "While I was studying, my friend called me.",
    trap:
      "While ke saath ongoing action ko identify karo."
  },

  {
    id: 19,
    category: "past",
    title: "Earlier of Two Past Actions → Past Perfect",
    description:
      "When two past actions are mentioned, the action that happened earlier commonly takes Past Perfect.",
    example:
      "The train had left before we arrived.",
    trap:
      "Earlier action = had + V3."
  },

  {
    id: 20,
    category: "past",
    title: "Before / After + Past Sequence",
    description:
      "Past Perfect can be used to clearly show which past action happened first.",
    example:
      "After he had finished dinner, he went to bed.",
    trap:
      "Timeline identify karo: first action → Past Perfect."
  },

  {
    id: 21,
    category: "past",
    title: "By the Time + Past Event",
    description:
      "By the time followed by a past event commonly requires Past Perfect for the earlier action.",
    example:
      "By the time we reached the station, the train had left.",
    trap:
      "Infosys-style fill-in-the-blank mein very common pattern."
  },

  {
    id: 22,
    category: "past",
    title: "Past Perfect Continuous",
    description:
      "Had been + V-ing describes an ongoing action with duration before another past event.",
    example:
      "He had been working for three hours before I arrived.",
    trap:
      "had been + V-ing + for/since."
  },

  // ================= FUTURE =================

  {
    id: 23,
    category: "future",
    title: "Simple Future → will + V1",
    description:
      "Simple Future is formed with will + base verb.",
    example:
      "I will call you tomorrow.",
    trap:
      "❌ will called / ❌ will calling."
  },

  {
    id: 24,
    category: "future",
    title: "Future Continuous",
    description:
      "Future Continuous uses will be + V-ing for an action in progress at a future time.",
    example:
      "I will be studying at 8 PM tomorrow.",
    trap:
      "will be + V-ing."
  },

  {
    id: 25,
    category: "future",
    title: "Future Perfect",
    description:
      "Future Perfect uses will have + V3 for an action completed before a future deadline.",
    example:
      "She will have completed the project by Monday.",
    trap:
      "By + future deadline is a strong clue."
  },

  {
    id: 26,
    category: "future",
    title: "Future Perfect Continuous",
    description:
      "Future Perfect Continuous uses will have been + V-ing.",
    example:
      "By June, he will have been working here for five years.",
    trap:
      "Duration + future deadline → often Future Perfect Continuous."
  },

  // ================= TIME CLAUSES =================

  {
    id: 27,
    category: "time-clause",
    title: "When + Future Meaning → Simple Present",
    description:
      "In a future time clause beginning with when, use Simple Present instead of will.",
    example:
      "When he comes, I will call you.",
    trap:
      "❌ When he will come, I will call you."
  },

  {
    id: 28,
    category: "time-clause",
    title: "Before + Future Meaning → Simple Present",
    description:
      "After before, use Simple Present when referring to a future event.",
    example:
      "Before he leaves, I will talk to him.",
    trap:
      "❌ Before he will leave..."
  },

  {
    id: 29,
    category: "time-clause",
    title: "After + Future Meaning → Simple Present",
    description:
      "After can be followed by Simple Present when the meaning is future.",
    example:
      "After she finishes the work, she will go home.",
    trap:
      "❌ After she will finish..."
  },

  {
    id: 30,
    category: "time-clause",
    title: "Until / Unless + Future Meaning",
    description:
      "Use Simple Present after until and unless when the main clause expresses future meaning.",
    example:
      "I will wait until he comes.",
    trap:
      "❌ I will wait until he will come."
  },

  // ================= ERROR DETECTION =================

  {
    id: 31,
    category: "error",
    title: "Yesterday + Present Perfect → Usually Wrong",
    description:
      "A finished past time expression such as yesterday normally requires Simple Past.",
    example:
      "He completed the work yesterday.",
    trap:
      "❌ He has completed the work yesterday."
  },

  {
    id: 32,
    category: "error",
    title: "Ago + Present Perfect → Wrong",
    description:
      "Ago refers to a finished point in the past and normally requires Simple Past.",
    example:
      "She left two hours ago.",
    trap:
      "❌ She has left two hours ago."
  },

  {
    id: 33,
    category: "error",
    title: "Since + Continuing Action",
    description:
      "For an action that started in the past and continues to the present, use Present Perfect or Present Perfect Continuous.",
    example:
      "He has lived here since 2020.",
    trap:
      "❌ He lives here since 2020."
  },

  {
    id: 34,
    category: "error",
    title: "Duration + Correct Perfect Tense",
    description:
      "A continuing action with a duration commonly requires Present Perfect or Present Perfect Continuous.",
    example:
      "He has been living here for five years.",
    trap:
      "Duration ke saath tense carefully identify karo."
  },

  // ================= CONDITIONALS =================

  {
    id: 35,
    category: "conditional",
    title: "First Conditional",
    description:
      "First Conditional uses If + Simple Present followed by will + V1.",
    example:
      "If it rains, we will stay home.",
    trap:
      "❌ If it will rain, we will stay home."
  },

  {
    id: 36,
    category: "conditional",
    title: "Second Conditional",
    description:
      "Second Conditional uses If + Simple Past followed by would + V1.",
    example:
      "If I had money, I would buy a car.",
    trap:
      "Imaginary/unreal present situation."
  },

  {
    id: 37,
    category: "conditional",
    title: "Third Conditional",
    description:
      "Third Conditional uses If + had + V3 followed by would have + V3.",
    example:
      "If he had studied, he would have passed.",
    trap:
      "Past unreal situation → had + V3."
  },

  // ================= ADVANCED =================

  {
    id: 38,
    category: "advanced",
    title: "Used to + V1",
    description:
      "Used to describes a past habit or past state that is no longer true.",
    example:
      "I used to play cricket.",
    trap:
      "❌ I used to played cricket."
  },

  {
    id: 39,
    category: "advanced",
    title: "Would Rather + V1",
    description:
      "Would rather is followed by the base form of the verb.",
    example:
      "I would rather stay home.",
    trap:
      "❌ I would rather staying home."
  },

  {
    id: 40,
    category: "advanced",
    title: "Sequence of Tenses",
    description:
      "With a past reporting verb, the tense of the reported statement commonly shifts backward.",
    example:
      'He said, "I am tired." → He said that he was tired.',
    trap:
      "Reported speech mein tense backshift ko check karo."
  }

];

// =====================================================
// ARTICLES — INFOSYS SYSTEM ENGINEER
// =====================================================

const articleRules = [

  // ================= A / AN =================

  {
    id: 1,
    category: "a-an",
    title: "Singular Countable Noun + Consonant Sound → A",
    description:
      "A is used before a singular countable noun beginning with a consonant sound.",
    example:
      "He is a student.",
    trap:
      "Sound important hai, sirf spelling nahi."
  },

  {
    id: 2,
    category: "a-an",
    title: "Vowel Sound → AN",
    description:
      "An is used before a singular countable noun beginning with a vowel sound.",
    example:
      "He is an engineer.",
    trap:
      "Vowel letter nahi, vowel sound check karo."
  },

  {
    id: 3,
    category: "a-an",
    title: "University → A",
    description:
      "University starts with the sound 'yu', which is a consonant sound.",
    example:
      "She is a university student.",
    trap:
      "❌ an university"
  },

  {
    id: 4,
    category: "a-an",
    title: "European → A",
    description:
      "European starts with the consonant sound 'yu'.",
    example:
      "He is a European citizen.",
    trap:
      "❌ an European"
  },

  {
    id: 5,
    category: "a-an",
    title: "Silent H → AN",
    description:
      "Use an when H is silent and the following sound is a vowel sound.",
    example:
      "He is an honest man.",
    trap:
      "honest → 'onest' sound."
  },

  {
    id: 6,
    category: "a-an",
    title: "Pronounced H → A",
    description:
      "Use a when H is pronounced with a consonant sound.",
    example:
      "He lives in a house.",
    trap:
      "house, hotel, historical → generally a."
  },

  {
    id: 7,
    category: "a-an",
    title: "Vowel-Sound Abbreviation → AN",
    description:
      "Use an when an abbreviation begins with a vowel sound.",
    example:
      "He is an MBA graduate.",
    trap:
      "MBA is pronounced 'em-bi-e'."
  },

  {
    id: 8,
    category: "a-an",
    title: "Consonant-Sound Abbreviation → A",
    description:
      "Use a when an abbreviation begins with a consonant sound.",
    example:
      "He is a UPSC aspirant.",
    trap:
      "UPSC begins with the sound 'yu'."
  },


  // ================= THE =================

  {
    id: 9,
    category: "the",
    title: "Specific / Known Noun → THE",
    description:
      "Use the when the noun is specific or already known to the listener.",
    example:
      "I saw a dog. The dog was black.",
    trap:
      "First mention → a/an; known noun → the."
  },

  {
    id: 10,
    category: "the",
    title: "Unique Things → THE",
    description:
      "Unique objects and things generally take the.",
    example:
      "The Sun rises in the east.",
    trap:
      "the Sun, the Moon, the Earth."
  },

  {
    id: 11,
    category: "the",
    title: "Superlative Degree → THE",
    description:
      "Superlative adjectives normally take the.",
    example:
      "He is the best player.",
    trap:
      "❌ He is a best player."
  },

  {
    id: 12,
    category: "the",
    title: "Ordinal Number → THE",
    description:
      "Ordinal numbers generally take the.",
    example:
      "Read the first chapter.",
    trap:
      "the first, the second, the third."
  },

  {
    id: 13,
    category: "the",
    title: "Repeated Mention → THE",
    description:
      "A noun already introduced can take the when referring to the same specific noun.",
    example:
      "I bought a book. The book is interesting.",
    trap:
      "Second reference is specific."
  },

  {
    id: 14,
    category: "the",
    title: "The Same",
    description:
      "The fixed expression is 'the same'.",
    example:
      "This is the same book.",
    trap:
      "❌ This is a same book."
  },

  {
    id: 15,
    category: "the",
    title: "The Only",
    description:
      "Only generally takes the when referring to one particular person or thing.",
    example:
      "He is the only candidate who qualified.",
    trap:
      "the only + noun."
  },

  {
    id: 16,
    category: "the",
    title: "The + Adjective → Class / Group",
    description:
      "The + adjective can represent an entire class of people.",
    example:
      "The rich should help the poor.",
    trap:
      "rich/poor here represent groups."
  },


  // ================= GEOGRAPHY =================

  {
    id: 17,
    category: "geography",
    title: "Rivers → THE",
    description:
      "Names of rivers normally take the.",
    example:
      "The Ganga is a major river.",
    trap:
      "River names commonly use the."
  },

  {
    id: 18,
    category: "geography",
    title: "Seas and Oceans → THE",
    description:
      "Names of seas and oceans take the.",
    example:
      "The Indian Ocean is vast.",
    trap:
      "the Indian Ocean, the Arabian Sea."
  },

  {
    id: 19,
    category: "geography",
    title: "Mountain Ranges → THE",
    description:
      "Mountain ranges take the.",
    example:
      "The Himalayas are beautiful.",
    trap:
      "Range/group → the."
  },

  {
    id: 20,
    category: "geography",
    title: "Individual Mountain → Usually No THE",
    description:
      "Individual mountain names normally do not take the.",
    example:
      "Mount Everest is the highest peak.",
    trap:
      "❌ the Mount Everest"
  },

  {
    id: 21,
    category: "geography",
    title: "Deserts → THE",
    description:
      "Names of deserts normally take the.",
    example:
      "The Sahara Desert is huge.",
    trap:
      "Desert names → the."
  },

  {
    id: 22,
    category: "geography",
    title: "Groups of Islands → THE",
    description:
      "Names referring to groups of islands generally take the.",
    example:
      "The Andaman and Nicobar Islands are beautiful.",
    trap:
      "Group of islands → the."
  },

  {
    id: 23,
    category: "geography",
    title: "Plural / Group Country Names → THE",
    description:
      "Countries with plural or descriptive group names commonly take the.",
    example:
      "The United States is a developed country.",
    trap:
      "the United States, the United Kingdom, the Netherlands."
  },


  // ================= ZERO ARTICLE =================

  {
    id: 24,
    category: "zero",
    title: "Proper Names → Usually No Article",
    description:
      "Names of people, cities and many countries normally do not require an article.",
    example:
      "India is a large country.",
    trap:
      "❌ The India / ❌ The Delhi."
  },

  {
    id: 25,
    category: "zero",
    title: "Languages → No Article",
    description:
      "Languages generally do not take an article when used generally.",
    example:
      "I speak English.",
    trap:
      "❌ I speak the English."
  },

  {
    id: 26,
    category: "zero",
    title: "School Subjects → No Article",
    description:
      "Names of academic subjects generally do not take an article.",
    example:
      "Mathematics is difficult.",
    trap:
      "❌ The Mathematics is difficult."
  },

  {
    id: 27,
    category: "zero",
    title: "Sports → No Article",
    description:
      "Sports names generally do not take an article.",
    example:
      "He plays cricket.",
    trap:
      "❌ He plays the cricket."
  },

  {
    id: 28,
    category: "zero",
    title: "Meals → Normally No Article",
    description:
      "Breakfast, lunch and dinner generally do not take an article when used generally.",
    example:
      "We had breakfast at 8 AM.",
    trap:
      "Specific meal can take the."
  },

  {
    id: 29,
    category: "zero",
    title: "Abstract Noun in General Sense → No Article",
    description:
      "Abstract nouns used in a general sense usually take no article.",
    example:
      "Honesty is the best policy.",
    trap:
      "Specific honesty can take the."
  },

  {
    id: 30,
    category: "zero",
    title: "Illness Names → Generally No Article",
    description:
      "Many disease names are used without an article.",
    example:
      "He has diabetes.",
    trap:
      "Disease-name usage depends on the expression."
  },


  // ================= EXAM TRAPS =================

  {
    id: 31,
    category: "traps",
    title: "A Number of vs The Number of",
    description:
      "A number of means several and takes a plural verb. The number of refers to the total and takes a singular verb.",
    example:
      "A number of students are absent. The number of students is increasing.",
    trap:
      "A number → plural verb; The number → singular verb."
  },

  {
    id: 32,
    category: "traps",
    title: "A Few vs Few",
    description:
      "A few means some, while few means almost none.",
    example:
      "A few students passed the exam.",
    trap:
      "Meaning changes significantly."
  },

  {
    id: 33,
    category: "traps",
    title: "A Little vs Little",
    description:
      "A little means some amount, while little means almost none.",
    example:
      "A little water is left.",
    trap:
      "Water is uncountable."
  },


  // ================= SPECIAL =================

  {
    id: 34,
    category: "special",
    title: "Musical Instruments → THE",
    description:
      "When talking about playing a musical instrument generally, use the.",
    example:
      "He plays the guitar.",
    trap:
      "the guitar, the piano, the violin."
  },

  {
    id: 35,
    category: "special",
    title: "Famous Buildings / Monuments → THE",
    description:
      "Many famous monuments and buildings take the.",
    example:
      "The Taj Mahal is in Agra.",
    trap:
      "Specific famous structure → the."
  },

  {
    id: 36,
    category: "special",
    title: "Newspapers → THE",
    description:
      "Names of many newspapers use the.",
    example:
      "I read The Times of India.",
    trap:
      "Newspaper names are commonly tested with the."
  },

  {
    id: 37,
    category: "special",
    title: "Such + A/AN",
    description:
      "Use such + a/an + adjective + singular countable noun.",
    example:
      "It was such a difficult question.",
    trap:
      "Vowel sound → such an easy question."
  },

  {
    id: 38,
    category: "special",
    title: "What + A/AN",
    description:
      "Exclamatory sentences with singular countable nouns use what + a/an.",
    example:
      "What a beautiful day!",
    trap:
      "Vowel sound → What an amazing performance!"
  },

  {
    id: 39,
    category: "special",
    title: "Hotel / Museum Names → THE",
    description:
      "Many famous hotels and museums use the in their names.",
    example:
      "We visited the British Museum.",
    trap:
      "Learn the exact proper name when necessary."
  },

  {
    id: 40,
    category: "special",
    title: "Sound Is More Important Than Spelling",
    description:
      "Article selection depends on pronunciation rather than simply whether the first letter is a vowel or consonant.",
    example:
      "an hour, a university, an MBA, a European.",
    trap:
      "Infosys ka favourite A vs An trap: spelling nahi, sound dekho."
  }

];

/* ================================
   DOM ELEMENTS
================================ */

const rulesContainer =
  document.getElementById("rulesContainer");

const searchInput =
  document.getElementById("searchInput");

const categoryFilter =
  document.getElementById("categoryFilter");

const showCompletedBtn =
  document.getElementById("showCompletedBtn");

const themeToggle =
  document.getElementById("themeToggle");

const resetBtn =
  document.getElementById("resetBtn");

const completedRules =
  document.getElementById("completedRules");

const remainingRules =
  document.getElementById("remainingRules");

const statCompleted =
  document.getElementById("statCompleted");

const heroProgress =
  document.getElementById("heroProgress");

const heroProgressBar =
  document.getElementById("heroProgressBar");

const sectionProgressBar =
  document.getElementById("sectionProgressBar");

const sectionProgressText =
  document.getElementById("sectionProgressText");

const toast =
  document.getElementById("toast");

const toastText =
  document.getElementById("toastText");

const backTop =
  document.getElementById("backTop");

const mobileMenuBtn =
  document.getElementById("mobileMenuBtn");

const mobileSidebar =
  document.getElementById("mobileSidebar");

const closeSidebar =
  document.getElementById("closeSidebar");

const continueBtn =
  document.getElementById("continueBtn");


/* ================================
   STORAGE
================================ */

let progress =
  JSON.parse(
    localStorage.getItem("verbalProgress")
  ) || {};

let bookmarks =
  JSON.parse(
    localStorage.getItem("verbalBookmarks")
  ) || {};

let showCompleted = false;


/* ================================
   SAVE
================================ */

function saveProgress() {

  localStorage.setItem(
    "verbalProgress",
    JSON.stringify(progress)
  );

}


function saveBookmarks() {

  localStorage.setItem(
    "verbalBookmarks",
    JSON.stringify(bookmarks)
  );

}


/* ================================
   RENDER RULES
================================ */

function renderRules() {

  const search =
    searchInput.value
      .toLowerCase()
      .trim();

  const category =
    categoryFilter.value;


  let filteredRules =
    rules.filter(rule => {

      const matchesSearch =
        rule.title
          .toLowerCase()
          .includes(search) ||

        rule.description
          .toLowerCase()
          .includes(search) ||

        rule.example
          .toLowerCase()
          .includes(search);


      const matchesCategory =
        category === "all" ||
        rule.category === category;


      const matchesCompleted =
        !showCompleted ||
        progress[rule.id] === true;


      return (
        matchesSearch &&
        matchesCategory &&
        matchesCompleted
      );

    });


  if (filteredRules.length === 0) {

    rulesContainer.innerHTML = `
      <div class="empty-state">

        <i class="fa-solid fa-magnifying-glass"></i>

        <h3>No rules found</h3>

        <p>
          Try another search or category.
        </p>

      </div>
    `;

    return;

  }


  rulesContainer.innerHTML =
    filteredRules.map(createRuleCard).join("");

}


/* ================================
   CREATE RULE CARD
================================ */

function createRuleCard(rule) {

  const completed =
    progress[rule.id] === true;

  const bookmarked =
    bookmarks[rule.id] === true;


  return `

    <article
      class="rule-card ${completed ? "completed" : ""}"
      data-id="${rule.id}"
    >

      <div class="rule-top">

        <div class="rule-number">

          ${
            completed
              ? '<i class="fa-solid fa-check"></i>'
              : String(rule.id).padStart(2, "0")
          }

        </div>


        <div class="rule-actions">

          <button
            class="small-action ${
              bookmarked ? "bookmarked" : ""
            }"
            onclick="toggleBookmark(${rule.id})"
            title="Bookmark"
          >

            <i class="fa-${
              bookmarked ? "solid" : "regular"
            } fa-star"></i>

          </button>


          <button
            class="small-action"
            onclick="copyRule(${rule.id})"
            title="Copy"
          >

            <i class="fa-regular fa-copy"></i>

          </button>

        </div>

      </div>


      <span class="rule-category">
        ${getCategoryName(rule.category)}
      </span>


      <h3>
        ${rule.title}
      </h3>


      <p class="rule-description">
        ${rule.description}
      </p>


      <div class="example-box">

        <div class="example-label">
          Example
        </div>

        <div class="example">
          ${rule.example}
        </div>

      </div>


      <div class="trap">

        <i class="fa-solid fa-triangle-exclamation"></i>

        <span>
          ${rule.trap}
        </span>

      </div>


      <button
        class="complete-btn"
        onclick="toggleComplete(${rule.id})"
      >

        ${
          completed
            ? '<i class="fa-solid fa-check"></i> Completed'
            : '<i class="fa-regular fa-circle"></i> Mark as Complete'
        }

      </button>

    </article>

  `;
}


/* ================================
   CATEGORY NAME
================================ */

function getCategoryName(category) {

  const names = {

    basic: "Basic Rule",

    pronoun: "Pronouns",

    compound: "Compound Subjects",

    quantity: "Quantity",

    noun: "Special Nouns",

    phrase: "Phrases",

    advanced: "Advanced"

  };

  return names[category] || category;

}


/* ================================
   COMPLETE RULE
================================ */

function toggleComplete(id) {

  progress[id] =
    !progress[id];

  saveProgress();

  renderRules();

  updateDashboard();

  showToast(
    progress[id]
      ? "Rule marked as completed"
      : "Rule marked as incomplete"
  );

}


/* ================================
   BOOKMARK
================================ */

function toggleBookmark(id) {

  bookmarks[id] =
    !bookmarks[id];

  saveBookmarks();

  renderRules();

  showToast(
    bookmarks[id]
      ? "Rule bookmarked"
      : "Bookmark removed"
  );

}


/* ================================
   COPY RULE
================================ */

function copyRule(id) {

  const rule =
    rules.find(
      item => item.id === id
    );

  const text =

`${rule.id}. ${rule.title}

${rule.description}

Example:
${stripHTML(rule.example)}

${rule.trap}`;


  navigator.clipboard.writeText(text);

  showToast("Rule copied to clipboard");

}


/* ================================
   REMOVE HTML
================================ */

function stripHTML(html) {

  const temp =
    document.createElement("div");

  temp.innerHTML = html;

  return temp.textContent || "";

}


/* ================================
   DASHBOARD
================================ */

function updateDashboard() {

  const total =
    rules.length;

  const completed =
    Object.values(progress)
      .filter(Boolean)
      .length;

  const remaining =
    total - completed;

  const percentage =
    Math.round(
      (completed / total) * 100
    );


  completedRules.textContent =
    completed;

  remainingRules.textContent =
    remaining;

  statCompleted.textContent =
    completed;

  heroProgress.textContent =
    `${percentage}%`;

  heroProgressBar.style.width =
    `${percentage}%`;

  sectionProgressBar.style.width =
    `${percentage}%`;

  sectionProgressText.textContent =
    `${completed} / ${total} completed`;


  updateStreak();

}


/* ================================
   STREAK
================================ */

function updateStreak() {

  const completed =
    Object.values(progress)
      .filter(Boolean)
      .length;

  document.getElementById("streak")
    .textContent =
    completed > 0 ? Math.min(completed, 7) : 0;

}


/* ================================
   TOAST
================================ */

let toastTimer;


function showToast(message) {

  toastText.textContent =
    message;

  toast.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer =
    setTimeout(() => {

      toast.classList.remove("show");

    }, 2200);

}


/* ================================
   SEARCH
================================ */

searchInput.addEventListener(
  "input",
  renderRules
);


categoryFilter.addEventListener(
  "change",
  renderRules
);


/* ================================
   COMPLETED FILTER
================================ */

showCompletedBtn.addEventListener(
  "click",
  () => {

    showCompleted =
      !showCompleted;

    showCompletedBtn.classList.toggle(
      "active",
      showCompleted
    );

    renderRules();

  }
);


/* ================================
   THEME
================================ */

function loadTheme() {

  const theme =
    localStorage.getItem(
      "verbalTheme"
    );

  if (theme === "dark") {

    document.body.classList.add("dark");

    themeToggle.innerHTML =
      '<i class="fa-solid fa-sun"></i>';

  }

}


themeToggle.addEventListener(
  "click",
  () => {

    document.body.classList.toggle(
      "dark"
    );

    const dark =
      document.body.classList.contains(
        "dark"
      );


    localStorage.setItem(
      "verbalTheme",
      dark ? "dark" : "light"
    );


    themeToggle.innerHTML =
      dark
        ? '<i class="fa-solid fa-sun"></i>'
        : '<i class="fa-solid fa-moon"></i>';

  }
);


/* ================================
   RESET
================================ */

resetBtn.addEventListener(
  "click",
  () => {

    const confirmReset =
      confirm(
        "Are you sure you want to reset all your progress?"
      );


    if (!confirmReset) return;


    progress = {};

    bookmarks = {};

    saveProgress();

    saveBookmarks();

    renderRules();

    updateDashboard();

    showToast(
      "All progress has been reset"
    );

  }
);


/* ================================
   CONTINUE
================================ */

continueBtn.addEventListener(
  "click",
  () => {

    const nextRule =
      rules.find(
        rule => !progress[rule.id]
      );


    if (!nextRule) {

      showToast(
        "All 40 rules are completed!"
      );

      return;

    }


    const card =
      document.querySelector(
        `[data-id="${nextRule.id}"]`
      );


    if (card) {

      card.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });

    }

  }
);


/* ================================
   BACK TO TOP
================================ */

window.addEventListener(
  "scroll",
  () => {

    if (window.scrollY > 500) {

      backTop.classList.add("show");

    } else {

      backTop.classList.remove("show");

    }

  }
);


backTop.addEventListener(
  "click",
  () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  }
);


/* ================================
   MOBILE SIDEBAR
================================ */

mobileMenuBtn.addEventListener(
  "click",
  () => {

    mobileSidebar.classList.add(
      "open"
    );

  }
);


closeSidebar.addEventListener(
  "click",
  () => {

    mobileSidebar.classList.remove(
      "open"
    );

  }
);


/* Close sidebar after clicking link */

document
  .querySelectorAll(
    ".mobile-sidebar a"
  )
  .forEach(link => {

    link.addEventListener(
      "click",
      () => {

        mobileSidebar.classList.remove(
          "open"
        );

      }
    );

  });


/* ================================
   NAV ACTIVE STATE
================================ */

document
  .querySelectorAll(".nav-link")
  .forEach(link => {

    link.addEventListener(
      "click",
      () => {

        document
          .querySelectorAll(".nav-link")
          .forEach(item =>
            item.classList.remove("active")
          );

        link.classList.add("active");

      }
    );

  });



  /* =====================================================
   PREPOSITION TRACKER
===================================================== */

let prepositionProgress =
  JSON.parse(
    localStorage.getItem("prepositionProgress")
  ) || {};

let prepositionBookmarks =
  JSON.parse(
    localStorage.getItem("prepositionBookmarks")
  ) || {};

let showCompletedPrepositions = false;


const prepositionsContainer =
  document.getElementById(
    "prepositionsContainer"
  );

const prepositionSearch =
  document.getElementById(
    "prepositionSearch"
  );

const prepositionCategory =
  document.getElementById(
    "prepositionCategory"
  );

const prepositionCompletedBtn =
  document.getElementById(
    "prepositionCompletedBtn"
  );

const prepositionProgressBar =
  document.getElementById(
    "prepositionProgressBar"
  );

const prepositionProgressText =
  document.getElementById(
    "prepositionProgressText"
  );


function savePrepositionData() {

  localStorage.setItem(
    "prepositionProgress",
    JSON.stringify(
      prepositionProgress
    )
  );

  localStorage.setItem(
    "prepositionBookmarks",
    JSON.stringify(
      prepositionBookmarks
    )
  );

}


function renderPrepositions() {

  const search =
    prepositionSearch.value
      .toLowerCase()
      .trim();

  const category =
    prepositionCategory.value;


  const filtered =
    prepositionRules.filter(rule => {

      const matchesSearch =

        rule.title
          .toLowerCase()
          .includes(search) ||

        rule.description
          .toLowerCase()
          .includes(search) ||

        rule.example
          .toLowerCase()
          .includes(search);


      const matchesCategory =
        category === "all" ||
        rule.category === category;


      const matchesCompleted =
        !showCompletedPrepositions ||
        prepositionProgress[rule.id] === true;


      return (
        matchesSearch &&
        matchesCategory &&
        matchesCompleted
      );

    });


  if (!filtered.length) {

    prepositionsContainer.innerHTML = `

      <div class="empty-state">

        <i class="fa-solid fa-magnifying-glass"></i>

        <h3>No preposition rules found</h3>

        <p>
          Try another search or category.
        </p>

      </div>

    `;

    return;

  }


  prepositionsContainer.innerHTML =
    filtered
      .map(createPrepositionCard)
      .join("");

}


function createPrepositionCard(rule) {

  const completed =
    prepositionProgress[rule.id] === true;

  const bookmarked =
    prepositionBookmarks[rule.id] === true;


  return `

    <article
      class="rule-card ${
        completed ? "completed" : ""
      }"
      data-preposition-id="${rule.id}"
    >

      <div class="rule-top">

        <div class="rule-number">

          ${
            completed
              ? '<i class="fa-solid fa-check"></i>'
              : String(rule.id).padStart(2, "0")
          }

        </div>


        <div class="rule-actions">

          <button
            class="small-action ${
              bookmarked
                ? "bookmarked"
                : ""
            }"
            onclick="
              togglePrepositionBookmark(
                ${rule.id}
              )
            "
          >

            <i class="fa-${
              bookmarked
                ? "solid"
                : "regular"
            } fa-star"></i>

          </button>


          <button
            class="small-action"
            onclick="
              copyPreposition(
                ${rule.id}
              )
            "
          >

            <i class="fa-regular fa-copy"></i>

          </button>

        </div>

      </div>


      <span class="rule-category">

        ${getPrepositionCategoryName(
          rule.category
        )}

      </span>


      <h3>
        ${rule.title}
      </h3>


      <p class="rule-description">
        ${rule.description}
      </p>


      <div class="example-box">

        <div class="example-label">
          Example
        </div>

        <div class="example">
          ${rule.example}
        </div>

      </div>


      <div class="trap">

        <i class="fa-solid fa-triangle-exclamation"></i>

        <span>
          ${rule.trap}
        </span>

      </div>


      <button
        class="complete-btn"
        onclick="
          togglePrepositionComplete(
            ${rule.id}
          )
        "
      >

        ${
          completed
            ? '<i class="fa-solid fa-check"></i> Completed'
            : '<i class="fa-regular fa-circle"></i> Mark as Complete'
        }

      </button>

    </article>

  `;

}


function getPrepositionCategoryName(
  category
) {

  const names = {

    time: "Time",

    place: "Place & Direction",

    comparison:
      "Comparison & Position",

    fixed:
      "Fixed Prepositions",

    common:
      "Common Errors"

  };

  return names[category] || category;

}


function togglePrepositionComplete(
  id
) {

  prepositionProgress[id] =
    !prepositionProgress[id];

  savePrepositionData();

  renderPrepositions();

  updatePrepositionProgress();

  showToast(
    prepositionProgress[id]
      ? "Preposition rule completed"
      : "Preposition rule marked incomplete"
  );

}


function togglePrepositionBookmark(
  id
) {

  prepositionBookmarks[id] =
    !prepositionBookmarks[id];

  savePrepositionData();

  renderPrepositions();

  showToast(
    prepositionBookmarks[id]
      ? "Preposition rule bookmarked"
      : "Bookmark removed"
  );

}


function copyPreposition(id) {

  const rule =
    prepositionRules.find(
      item => item.id === id
    );


  const text =

`${rule.id}. ${rule.title}

${rule.description}

Example:
${stripHTML(rule.example)}

${rule.trap}`;


  navigator.clipboard.writeText(
    text
  );

  showToast(
    "Preposition rule copied"
  );

}


function updatePrepositionProgress() {

  const total =
    prepositionRules.length;

  const completed =
    Object.values(
      prepositionProgress
    ).filter(Boolean).length;


  const percentage =
    Math.round(
      (completed / total) * 100
    );


  prepositionProgressBar.style.width =
    `${percentage}%`;


  prepositionProgressText.textContent =
    `${completed} / ${total} completed`;

}


prepositionSearch.addEventListener(
  "input",
  renderPrepositions
);


prepositionCategory.addEventListener(
  "change",
  renderPrepositions
);


prepositionCompletedBtn.addEventListener(
  "click",
  () => {

    showCompletedPrepositions =
      !showCompletedPrepositions;

    prepositionCompletedBtn.classList.toggle(
      "active",
      showCompletedPrepositions
    );

    renderPrepositions();

  }
);

// =====================================================
// TENSE TRACKER
// =====================================================

let tenseProgress =
  JSON.parse(localStorage.getItem("tenseProgress")) || {};

let tenseBookmarks =
  JSON.parse(localStorage.getItem("tenseBookmarks")) || {};

let showCompletedTenses = false;


// Save Tense Data
function saveTenseData() {
  localStorage.setItem(
    "tenseProgress",
    JSON.stringify(tenseProgress)
  );

  localStorage.setItem(
    "tenseBookmarks",
    JSON.stringify(tenseBookmarks)
  );
}


// Get Category Name
function getTenseCategoryName(category) {

  const categories = {
    present: "Present Tense",
    past: "Past Tense",
    future: "Future Tense",
    "time-clause": "Time Clauses",
    conditional: "Conditionals",
    error: "Error Detection",
    advanced: "Advanced"
  };

  return categories[category] || category;
}


// Render Tenses
function renderTenses() {

  const container =
    document.getElementById("tensesContainer");

  if (!container) return;

  const search =
    document
      .getElementById("tenseSearch")
      .value
      .toLowerCase()
      .trim();

  const category =
    document.getElementById("tenseCategory").value;

  let filteredRules = tenseRules.filter(rule => {

    const matchesSearch =
      rule.title.toLowerCase().includes(search) ||
      rule.description.toLowerCase().includes(search) ||
      rule.example.toLowerCase().includes(search) ||
      rule.trap.toLowerCase().includes(search);

    const matchesCategory =
      category === "all" ||
      rule.category === category;

    const matchesCompleted =
      !showCompletedTenses ||
      tenseProgress[rule.id];

    return (
      matchesSearch &&
      matchesCategory &&
      matchesCompleted
    );
  });


  if (filteredRules.length === 0) {

    container.innerHTML = `
      <div class="empty-state">
        <i class="fa-solid fa-magnifying-glass"></i>
        <h3>No rules found</h3>
        <p>Try another search or category.</p>
      </div>
    `;

    return;
  }


  container.innerHTML =
    filteredRules
      .map(rule => createTenseCard(rule))
      .join("");
}


// Create Tense Card
function createTenseCard(rule) {

  const isCompleted =
    !!tenseProgress[rule.id];

  const isBookmarked =
    !!tenseBookmarks[rule.id];


  return `
    <div class="rule-card ${
      isCompleted ? "completed" : ""
    }">

      <div class="rule-card-header">

        <div class="rule-number">
          ${rule.id}
        </div>

        <div class="rule-card-title">

          <span class="rule-category">
            ${getTenseCategoryName(rule.category)}
          </span>

          <h3>${rule.title}</h3>

        </div>

        <div class="rule-actions">

          <button
            class="icon-btn ${
              isBookmarked ? "active" : ""
            }"
            onclick="toggleTenseBookmark(${rule.id})"
            title="Bookmark"
          >
            <i class="${
              isBookmarked
                ? "fa-solid"
                : "fa-regular"
            } fa-bookmark"></i>
          </button>

          <button
            class="icon-btn"
            onclick="copyTense(${rule.id})"
            title="Copy"
          >
            <i class="fa-regular fa-copy"></i>
          </button>

        </div>

      </div>


      <div class="rule-content">

        <p class="rule-description">
          ${rule.description}
        </p>


        <div class="rule-example">

          <div class="example-label">
            <i class="fa-solid fa-code"></i>
            Example
          </div>

          <p>${rule.example}</p>

        </div>


        <div class="rule-trap">

          <div class="trap-label">
            <i class="fa-solid fa-triangle-exclamation"></i>
            Infosys Trap
          </div>

          <p>${rule.trap}</p>

        </div>


        <button
          class="complete-btn ${
            isCompleted ? "completed" : ""
          }"
          onclick="toggleTenseComplete(${rule.id})"
        >

          <i class="fa-solid ${
            isCompleted
              ? "fa-circle-check"
              : "fa-check"
          }"></i>

          ${
            isCompleted
              ? "Completed"
              : "Mark as Completed"
          }

        </button>

      </div>

    </div>
  `;
}


// Toggle Complete
function toggleTenseComplete(id) {

  if (tenseProgress[id]) {
    delete tenseProgress[id];
  } else {
    tenseProgress[id] = true;
  }

  saveTenseData();
  renderTenses();
  updateTenseProgress();
  updateDashboard();
}


// Toggle Bookmark
function toggleTenseBookmark(id) {

  if (tenseBookmarks[id]) {
    delete tenseBookmarks[id];
  } else {
    tenseBookmarks[id] = true;
  }

  saveTenseData();
  renderTenses();
}


// Copy Tense Rule
function copyTense(id) {

  const rule =
    tenseRules.find(item => item.id === id);

  if (!rule) return;

  const text = `
TENSE RULE #${rule.id}

${rule.title}

${rule.description}

Example:
${rule.example}

Infosys Trap:
${rule.trap}
  `.trim();


  navigator.clipboard.writeText(text)
    .then(() => {

      alert("Tense rule copied!");

    })
    .catch(() => {

      alert("Unable to copy rule.");

    });
}


// Update Tense Progress
function updateTenseProgress() {

  const completed =
    Object.keys(tenseProgress).length;

  const total =
    tenseRules.length;

  const percentage =
    total === 0
      ? 0
      : Math.round((completed / total) * 100);


  const progressText =
    document.getElementById(
      "tenseProgressText"
    );

  const progressBar =
    document.getElementById(
      "tenseProgressBar"
    );


  if (progressText) {

    progressText.textContent =
      `${completed} / ${total} completed`;

  }


  if (progressBar) {

    progressBar.style.width =
      `${percentage}%`;

  }
}


// Search
document
  .getElementById("tenseSearch")
  ?.addEventListener("input", renderTenses);


// Category
document
  .getElementById("tenseCategory")
  ?.addEventListener("change", renderTenses);


// Completed Filter
document
  .getElementById("tenseCompletedBtn")
  ?.addEventListener("click", function () {

    showCompletedTenses =
      !showCompletedTenses;

    this.classList.toggle(
      "active",
      showCompletedTenses
    );

    renderTenses();

  });


  // =====================================================
// ARTICLE TRACKER
// =====================================================

let articleProgress =
  JSON.parse(localStorage.getItem("articleProgress")) || {};

let articleBookmarks =
  JSON.parse(localStorage.getItem("articleBookmarks")) || {};

let showCompletedArticles = false;


// Save
function saveArticleData() {

  localStorage.setItem(
    "articleProgress",
    JSON.stringify(articleProgress)
  );

  localStorage.setItem(
    "articleBookmarks",
    JSON.stringify(articleBookmarks)
  );
}


// Category Name
function getArticleCategoryName(category) {

  const categories = {

    "a-an": "A / AN",
    "the": "THE",
    "geography": "Geography",
    "zero": "No Article",
    "traps": "Exam Traps",
    "special": "Special Rules"

  };

  return categories[category] || category;
}


// Render Articles
function renderArticles() {

  const container =
    document.getElementById("articlesContainer");

  if (!container) return;


  const search =
    document
      .getElementById("articleSearch")
      .value
      .toLowerCase()
      .trim();


  const category =
    document.getElementById("articleCategory").value;


  const filteredRules =
    articleRules.filter(rule => {

      const matchesSearch =

        rule.title
          .toLowerCase()
          .includes(search)

        ||

        rule.description
          .toLowerCase()
          .includes(search)

        ||

        rule.example
          .toLowerCase()
          .includes(search)

        ||

        rule.trap
          .toLowerCase()
          .includes(search);


      const matchesCategory =
        category === "all" ||
        rule.category === category;


      const matchesCompleted =
        !showCompletedArticles ||
        articleProgress[rule.id];


      return (
        matchesSearch &&
        matchesCategory &&
        matchesCompleted
      );

    });


  if (filteredRules.length === 0) {

    container.innerHTML = `

      <div class="empty-state">

        <i class="fa-solid fa-magnifying-glass"></i>

        <h3>No rules found</h3>

        <p>
          Try another search or category.
        </p>

      </div>

    `;

    return;
  }


  container.innerHTML =
    filteredRules
      .map(rule => createArticleCard(rule))
      .join("");
}


// Create Card
function createArticleCard(rule) {

  const isCompleted =
    !!articleProgress[rule.id];

  const isBookmarked =
    !!articleBookmarks[rule.id];


  return `

    <div class="rule-card ${
      isCompleted ? "completed" : ""
    }">


      <div class="rule-card-header">


        <div class="rule-number">
          ${rule.id}
        </div>


        <div class="rule-card-title">

          <span class="rule-category">
            ${getArticleCategoryName(rule.category)}
          </span>

          <h3>
            ${rule.title}
          </h3>

        </div>


        <div class="rule-actions">


          <button
            class="icon-btn ${
              isBookmarked ? "active" : ""
            }"
            onclick="toggleArticleBookmark(${rule.id})"
            title="Bookmark"
          >

            <i class="${
              isBookmarked
                ? "fa-solid"
                : "fa-regular"
            } fa-bookmark"></i>

          </button>


          <button
            class="icon-btn"
            onclick="copyArticle(${rule.id})"
            title="Copy"
          >

            <i class="fa-regular fa-copy"></i>

          </button>


        </div>

      </div>


      <div class="rule-content">


        <p class="rule-description">
          ${rule.description}
        </p>


        <div class="rule-example">

          <div class="example-label">

            <i class="fa-solid fa-code"></i>

            Example

          </div>

          <p>
            ${rule.example}
          </p>

        </div>


        <div class="rule-trap">

          <div class="trap-label">

            <i class="fa-solid fa-triangle-exclamation"></i>

            Infosys Trap

          </div>

          <p>
            ${rule.trap}
          </p>

        </div>


        <button
          class="complete-btn ${
            isCompleted ? "completed" : ""
          }"
          onclick="toggleArticleComplete(${rule.id})"
        >

          <i class="fa-solid ${
            isCompleted
              ? "fa-circle-check"
              : "fa-check"
          }"></i>


          ${
            isCompleted
              ? "Completed"
              : "Mark as Completed"
          }

        </button>


      </div>

    </div>

  `;
}


// Toggle Complete
function toggleArticleComplete(id) {

  if (articleProgress[id]) {

    delete articleProgress[id];

  } else {

    articleProgress[id] = true;

  }


  saveArticleData();

  renderArticles();

  updateArticleProgress();

  updateDashboard();
}


// Toggle Bookmark
function toggleArticleBookmark(id) {

  if (articleBookmarks[id]) {

    delete articleBookmarks[id];

  } else {

    articleBookmarks[id] = true;

  }


  saveArticleData();

  renderArticles();
}


// Copy
function copyArticle(id) {

  const rule =
    articleRules.find(item => item.id === id);

  if (!rule) return;


  const text = `

ARTICLE RULE #${rule.id}

${rule.title}

${rule.description}

Example:
${rule.example}

Infosys Trap:
${rule.trap}

  `.trim();


  navigator.clipboard
    .writeText(text)
    .then(() => {

      alert("Article rule copied!");

    })
    .catch(() => {

      alert("Unable to copy rule.");

    });
}


// Progress
function updateArticleProgress() {

  const completed =
    Object.keys(articleProgress).length;

  const total =
    articleRules.length;


  const percentage =
    total === 0
      ? 0
      : Math.round(
          (completed / total) * 100
        );


  const progressText =
    document.getElementById(
      "articleProgressText"
    );


  const progressBar =
    document.getElementById(
      "articleProgressBar"
    );


  if (progressText) {

    progressText.textContent =
      `${completed} / ${total} completed`;

  }


  if (progressBar) {

    progressBar.style.width =
      `${percentage}%`;

  }
}


// Search
document
  .getElementById("articleSearch")
  ?.addEventListener(
    "input",
    renderArticles
  );


// Category
document
  .getElementById("articleCategory")
  ?.addEventListener(
    "change",
    renderArticles
  );


// Completed Filter
document
  .getElementById("articleCompletedBtn")
  ?.addEventListener(
    "click",
    function () {

      showCompletedArticles =
        !showCompletedArticles;


      this.classList.toggle(
        "active",
        showCompletedArticles
      );


      renderArticles();

    }
  );


// Initial Render
renderArticles();
updateArticleProgress();


// Initial Render
renderTenses();
updateTenseProgress();


/* Initialize */

renderPrepositions();

updatePrepositionProgress();

/* ================================
   INITIALIZE
================================ */

loadTheme();

renderRules();

updateDashboard();

