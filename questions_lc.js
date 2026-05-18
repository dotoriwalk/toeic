// TOEIC Practice — Part 1~4 (LC), 10 sets each
const QUESTION_BANK_LC = {

/* ═══════════════════════════════════════════
   PART 1 — Photographs (LC)  10 sets
═══════════════════════════════════════════ */
'1': [
  { // Set 1
    passage: "A woman is sitting at a desk in an office. She is looking at a computer monitor and typing on a keyboard. Several documents are stacked on the left side of her desk. A coffee cup is placed near the keyboard. Large windows behind her let in natural light.",
    questions: [{ number:1, text:"Which statement best describes the photograph?",
      choices:["A woman is standing next to a printer.","A woman is working at a computer.","A woman is reading a book at her desk.","A woman is talking on the phone."],
      answer:"B", explanation:"여자가 모니터를 보며 키보드를 타이핑하고 있으므로 (B)가 정답입니다." }]
  },
  { // Set 2
    passage: "Two men are having a meeting in a conference room. They are sitting across from each other at a long table. One man is pointing at a document while the other listens. Laptops are open in front of both of them. A whiteboard with writing is visible on the wall.",
    questions: [{ number:1, text:"Which statement best describes the photograph?",
      choices:["Two men are eating lunch together.","Two men are discussing documents at a table.","A man is writing on a whiteboard.","Two men are standing near a window."],
      answer:"B", explanation:"두 남자가 테이블에서 서류를 보며 회의 중입니다. 정답은 (B)입니다." }]
  },
  { // Set 3
    passage: "A man is standing in a warehouse surrounded by tall shelves stocked with boxes. He is wearing a safety vest and holding a clipboard. A forklift is parked nearby. The shelves reach almost to the high ceiling.",
    questions: [{ number:1, text:"Which statement best describes the photograph?",
      choices:["A man is driving a forklift in a warehouse.","A man is checking inventory with a clipboard.","A man is unloading boxes from a truck.","A man is installing shelves in a store."],
      answer:"B", explanation:"클립보드를 들고 창고에서 재고를 확인하는 모습입니다. 정답은 (B)입니다." }]
  },
  { // Set 4
    passage: "Several people are waiting in line at a coffee shop counter. A barista is preparing drinks behind the counter. The menu board is displayed above. A display case with pastries is visible on one side. Some customers are looking at their phones.",
    questions: [{ number:1, text:"Which statement best describes the photograph?",
      choices:["People are seated at tables in a restaurant.","A barista is cleaning the coffee machine.","People are waiting in line at a coffee shop.","A cashier is counting money at the register."],
      answer:"C", explanation:"여러 사람이 커피숍 카운터 앞에 줄을 서고 있습니다. 정답은 (C)입니다." }]
  },
  { // Set 5
    passage: "A woman is presenting information to colleagues in a meeting room. She stands next to a large screen showing a graph. Audience members are seated around a rectangular table, some taking notes. A projector is mounted on the ceiling.",
    questions: [{ number:1, text:"Which statement best describes the photograph?",
      choices:["A woman is watching a presentation.","A woman is giving a presentation to colleagues.","Colleagues are setting up a projector.","A woman is drawing a graph on a whiteboard."],
      answer:"B", explanation:"여자가 동료들에게 발표하고 있습니다. 정답은 (B)입니다." }]
  },
  { // Set 6
    passage: "A group of construction workers are working on a building site. Some are wearing hard hats and reflective vests. One worker is operating a crane while others guide the load from below. Scaffolding covers the side of the building under construction.",
    questions: [{ number:1, text:"Which statement best describes the photograph?",
      choices:["Workers are painting the exterior of a building.","Construction workers are working on a building site.","Workers are demolishing an old structure.","A worker is repairing a road near a building."],
      answer:"B", explanation:"건설 현장에서 작업자들이 작업 중입니다. 정답은 (B)입니다." }]
  },
  { // Set 7
    passage: "A chef is standing at a kitchen counter chopping vegetables. He is wearing a white chef's coat and a tall hat. Several pots and pans are hanging from a rack above the counter. A large stove with multiple burners is behind him.",
    questions: [{ number:1, text:"Which statement best describes the photograph?",
      choices:["A chef is washing dishes at the sink.","A chef is preparing food at a kitchen counter.","A chef is serving food to customers.","A chef is reading a recipe book."],
      answer:"B", explanation:"셰프가 주방 카운터에서 채소를 썰고 있습니다. 정답은 (B)입니다." }]
  },
  { // Set 8
    passage: "A woman is browsing items on shelves in a bookstore. She is holding a book open and reading a page. Other customers are visible in the background. Bookshelves line both sides of the aisle, filled with books of various sizes.",
    questions: [{ number:1, text:"Which statement best describes the photograph?",
      choices:["A woman is paying for a book at the register.","A woman is reading a book in a bookstore.","A woman is organizing books on a shelf.","A woman is talking to a bookstore employee."],
      answer:"B", explanation:"여자가 서점에서 책을 펼쳐 읽고 있습니다. 정답은 (B)입니다." }]
  },
  { // Set 9
    passage: "Two women are working side by side at a laboratory bench. They are both wearing white lab coats and safety goggles. One woman is pouring liquid from a beaker while the other records data on a notepad. Scientific equipment fills the bench around them.",
    questions: [{ number:1, text:"Which statement best describes the photograph?",
      choices:["Two women are cleaning laboratory equipment.","Two women are conducting experiments in a lab.","A woman is teaching a class in a science room.","Two women are reviewing data on a computer."],
      answer:"B", explanation:"두 여자가 실험실에서 실험을 수행하고 있습니다. 정답은 (B)입니다." }]
  },
  { // Set 10
    passage: "A man is checking out at a grocery store. He is placing items on the conveyor belt while the cashier scans them. Several bags are already packed at the end of the counter. A line of customers waits behind him.",
    questions: [{ number:1, text:"Which statement best describes the photograph?",
      choices:["A man is stocking shelves in a grocery store.","A man is checking out at a grocery store counter.","A man is selecting produce from a display.","A man is asking a store employee for help."],
      answer:"B", explanation:"남자가 식료품점에서 계산대에서 물건을 계산하고 있습니다. 정답은 (B)입니다." }]
  }
],

/* ═══════════════════════════════════════════
   PART 2 — Question-Response (LC)  10 sets
═══════════════════════════════════════════ */
'2': [
  { // Set 1
    passage: "Narrator: When does the next train to downtown depart?",
    questions: [{ number:7, text:"What is the best response?",
      choices:["In about fifteen minutes, from platform three.","Yes, I take the train every day.","The ticket office is on the second floor."],
      answer:"A", explanation:"출발 시간을 묻는 When 질문에 '약 15분 후'라고 답하는 (A)가 정답입니다." }]
  },
  { // Set 2
    passage: "Narrator: Would you like me to schedule a meeting with the marketing team?",
    questions: [{ number:7, text:"What is the best response?",
      choices:["The marketing report was excellent.","Yes, please set it up for Thursday afternoon.","I've already met the team before."],
      answer:"B", explanation:"제안에 '목요일 오후로 잡아주세요'라고 답하는 (B)가 정답입니다." }]
  },
  { // Set 3
    passage: "Narrator: Who is responsible for approving the budget proposal?",
    questions: [{ number:7, text:"What is the best response?",
      choices:["The budget was approved last week.","It usually takes about three days.","That would be the finance director."],
      answer:"C", explanation:"Who 질문에 '재무 이사입니다'라고 답하는 (C)가 정답입니다." }]
  },
  { // Set 4
    passage: "Narrator: Hasn't the package from the supplier arrived yet?",
    questions: [{ number:7, text:"What is the best response?",
      choices:["No, but it should be here by noon.","The supplier is located downtown.","I'll pack it carefully for shipping."],
      answer:"A", explanation:"부정 의문문에 '아직이지만 정오까지는 올 것'이라고 답하는 (A)가 정답입니다." }]
  },
  { // Set 5
    passage: "Narrator: Where should I submit the expense report?",
    questions: [{ number:7, text:"What is the best response?",
      choices:["The expenses were higher than expected.","Send it directly to the accounting department.","I submitted the report yesterday."],
      answer:"B", explanation:"Where 질문에 '회계 부서로 직접 보내세요'라고 답하는 (B)가 정답입니다." }]
  },
  { // Set 6
    passage: "Narrator: Have you reviewed the new safety guidelines yet?",
    questions: [{ number:7, text:"What is the best response?",
      choices:["Not yet, but I plan to do it this afternoon.","The safety equipment is in the storage room.","Yes, the guidelines were updated last year."],
      answer:"A", explanation:"'아직이지만 오늘 오후에 할 예정'이라는 (A)가 가장 자연스러운 응답입니다." }]
  },
  { // Set 7
    passage: "Narrator: Why was the product launch postponed?",
    questions: [{ number:7, text:"What is the best response?",
      choices:["The launch will be held at the convention center.","There were some issues with the final quality checks.","We launched the product last quarter."],
      answer:"B", explanation:"Why 질문에 '최종 품질 검사에 문제가 있었다'고 답하는 (B)가 정답입니다." }]
  },
  { // Set 8
    passage: "Narrator: Could you help me carry these boxes to the storage room?",
    questions: [{ number:7, text:"What is the best response?",
      choices:["Sure, I'll be right with you.","The storage room is on the third floor.","Those boxes arrived this morning."],
      answer:"A", explanation:"부탁에 '네, 바로 도와드릴게요'라고 답하는 (A)가 가장 자연스러운 응답입니다." }]
  },
  { // Set 9
    passage: "Narrator: How many people are expected to attend the annual conference?",
    questions: [{ number:7, text:"What is the best response?",
      choices:["The conference was very well organized.","Around three hundred, based on current registrations.","It's held every year in the spring."],
      answer:"B", explanation:"How many 질문에 '현재 등록 기준 약 300명'이라고 답하는 (B)가 정답입니다." }]
  },
  { // Set 10
    passage: "Narrator: Is the boardroom available for a meeting at two o'clock?",
    questions: [{ number:7, text:"What is the best response?",
      choices:["I'll check the room booking system for you.","The meeting was very productive.","You can reserve it online."],
      answer:"A", explanation:"회의실 이용 가능 여부를 묻는 질문에 '예약 시스템 확인해 드릴게요'라고 답하는 (A)가 정답입니다." }]
  }
],

/* ═══════════════════════════════════════════
   PART 3 — Short Conversations (LC)  10 sets
═══════════════════════════════════════════ */
'3': [
  { // Set 1
    passage: "Man: Hi, I'd like to return this jacket. I bought it last week, but it doesn't fit properly.\nWoman: Of course. Do you have your receipt with you?\nMan: Yes, here it is. I paid by credit card.\nWoman: Great. Would you prefer a refund to your card, or would you like to exchange it for a different size?\nMan: I'd like to try a larger size if you have one available.\nWoman: Let me check our inventory. We do have a large in the same color. I'll get it for you right away.",
    questions: [
      { number:32, text:"Why does the man want to return the jacket?", choices:["It is the wrong color.","It does not fit him properly.","It was damaged when he bought it.","He found a cheaper one elsewhere."], answer:"B", explanation:"'it doesn't fit properly'라고 직접 말했습니다. 정답은 (B)입니다." },
      { number:33, text:"What does the woman ask the man for?", choices:["His credit card","His phone number","His receipt","His membership card"], answer:"C", explanation:"'Do you have your receipt with you?'라고 영수증을 요청했습니다. 정답은 (C)입니다." },
      { number:34, text:"What will the woman do next?", choices:["Process a refund to his card","Get a larger size jacket for the man","Call the warehouse for stock","Ask a manager for approval"], answer:"B", explanation:"'I'll get it for you right away'라고 했습니다. 정답은 (B)입니다." }
    ]
  },
  { // Set 2
    passage: "Woman: David, have you finished reviewing the contract with Apex Solutions?\nMan: I've gone through most of it, but there are a few clauses I'm not sure about. I'd like the legal team to take a look before we sign.\nWoman: That makes sense. How long do you think it will take them?\nMan: Probably two to three business days. I'll send it over this afternoon.\nWoman: Okay. Please keep me updated. The client is hoping to finalize everything by the end of the week.\nMan: I understand. I'll make sure they prioritize it.",
    questions: [
      { number:32, text:"What is the man concerned about?", choices:["The contract deadline is too soon.","Some clauses in the contract are unclear.","The client has changed their requirements.","The legal team is unavailable."], answer:"B", explanation:"'there are a few clauses I'm not sure about'라고 했습니다. 정답은 (B)입니다." },
      { number:33, text:"When does the client want to finalize the contract?", choices:["This afternoon","Within two to three days","By the end of the week","Next Monday"], answer:"C", explanation:"'finalize everything by the end of the week'라고 했습니다. 정답은 (C)입니다." },
      { number:34, text:"What will the man do this afternoon?", choices:["Meet with the client","Sign the contract","Send the contract to the legal team","Call a team meeting"], answer:"C", explanation:"'I'll send it over this afternoon'이라고 했습니다. 정답은 (C)입니다." }
    ]
  },
  { // Set 3
    passage: "Man: Excuse me, I have a reservation for tonight under the name Peterson.\nWoman: Let me look that up. Yes, a table for two at seven o'clock.\nMan: That's right. Actually, two more people will be joining us. Is it possible to get a larger table?\nWoman: Of course. We have a table for four available near the window. Would that work?\nMan: That would be perfect, thank you.\nWoman: Great. Shall I seat you now, or would you like to wait at the bar?\nMan: We can go ahead and sit now — the others will be here soon.",
    questions: [
      { number:32, text:"What is the man's original reservation for?", choices:["A table for two","A table for three","A table for four","A private dining room"], answer:"A", explanation:"'a table for two at seven o'clock'이라고 확인됐습니다. 정답은 (A)입니다." },
      { number:33, text:"Why does the man ask for a larger table?", choices:["He wants a better view.","Two more guests will join them.","The original table is too small.","He prefers sitting near the window."], answer:"B", explanation:"'two more people will be joining us'라고 했습니다. 정답은 (B)입니다." },
      { number:34, text:"What does the man decide to do?", choices:["Wait at the bar","Come back later","Be seated immediately","Call the other guests"], answer:"C", explanation:"'We can go ahead and sit now'라고 했습니다. 정답은 (C)입니다." }
    ]
  },
  { // Set 4
    passage: "Woman: Good morning. I'm calling about the printer on the third floor. It's been showing an error message since yesterday.\nMan: I see. What does the error message say?\nWoman: It says 'paper jam,' but we've already checked and there's no paper stuck inside.\nMan: In that case, it might be a sensor issue. I can send someone this morning.\nWoman: That would be great. We have a big report to print by noon.\nMan: Understood. I'll have a technician there within the hour.",
    questions: [
      { number:32, text:"What is the problem with the printer?", choices:["It is out of paper.","It is showing an error message.","It is printing in the wrong color.","It has been disconnected from the network."], answer:"B", explanation:"'It's been showing an error message since yesterday'라고 했습니다. 정답은 (B)입니다." },
      { number:33, text:"What does the man suggest the problem might be?", choices:["A paper jam","A software error","A sensor issue","A network problem"], answer:"C", explanation:"'it might be a sensor issue'라고 했습니다. 정답은 (C)입니다." },
      { number:34, text:"When will the technician arrive?", choices:["Before noon","Within the hour","This afternoon","Tomorrow morning"], answer:"B", explanation:"'I'll have a technician there within the hour'라고 했습니다. 정답은 (B)입니다." }
    ]
  },
  { // Set 5
    passage: "Man: Sarah, I just got back from the conference in Chicago. It was really informative.\nWoman: How was the keynote speech? I heard the speaker is well known in the industry.\nMan: It was excellent. She talked about how artificial intelligence is changing supply chain management.\nWoman: That sounds relevant to what we're working on. Did you pick up any materials?\nMan: Yes, I grabbed several brochures and there's also a recording available online. I'll send the link around.\nWoman: Perfect. Maybe we can discuss the highlights at our next team meeting.",
    questions: [
      { number:32, text:"Where did the man just return from?", choices:["A training session","A conference in Chicago","A business trip to New York","A client meeting"], answer:"B", explanation:"'I just got back from the conference in Chicago'라고 했습니다. 정답은 (B)입니다." },
      { number:33, text:"What was the keynote speech mainly about?", choices:["Financial management strategies","Marketing trends","Artificial intelligence in supply chain management","International trade regulations"], answer:"C", explanation:"'how artificial intelligence is changing supply chain management'이 주제였습니다. 정답은 (C)입니다." },
      { number:34, text:"What will the man do to share information with the team?", choices:["Print out the brochures","Present at the next meeting","Send a link to an online recording","Schedule a separate training session"], answer:"C", explanation:"'I'll send the link around'이라고 했습니다. 정답은 (C)입니다." }
    ]
  },
  { // Set 6
    passage: "Woman: Excuse me, I ordered the grilled salmon, but I received the pasta instead.\nMan: I sincerely apologize for that. Let me take the pasta back and get your correct order right away.\nWoman: Thank you. Also, could I get some more water when you have a chance?\nMan: Of course, I'll bring water and your salmon immediately. Can I offer you a complimentary dessert for the inconvenience?\nWoman: That's very kind, thank you.\nMan: I'll put that in for you right away.",
    questions: [
      { number:32, text:"What is the woman's complaint?", choices:["Her food took too long to arrive.","She received the wrong order.","The salmon was not cooked properly.","She was charged the wrong amount."], answer:"B", explanation:"'I ordered the grilled salmon, but I received the pasta instead'라고 했습니다. 정답은 (B)입니다." },
      { number:33, text:"What does the woman ask for besides her correct meal?", choices:["A menu","More water","The bill","Extra napkins"], answer:"B", explanation:"'could I get some more water'라고 요청했습니다. 정답은 (B)입니다." },
      { number:34, text:"What does the man offer the woman?", choices:["A discount on her bill","A free appetizer","A complimentary dessert","A voucher for her next visit"], answer:"C", explanation:"'a complimentary dessert for the inconvenience'를 제안했습니다. 정답은 (C)입니다." }
    ]
  },
  { // Set 7
    passage: "Man: Hi, I'm looking for a gift for my colleague. She's retiring after thirty years with the company.\nWoman: How lovely! We have a wonderful selection of personalized gifts. Were you thinking of something practical or more decorative?\nMan: Probably something she can display at home. What do you recommend?\nWoman: We have personalized photo frames and custom-engraved clocks that are very popular for retirement gifts.\nMan: The engraved clock sounds perfect. How long does it take to have it engraved?\nWoman: Usually two business days. So if you order today, it will be ready by Wednesday.",
    questions: [
      { number:32, text:"Why is the man buying a gift?", choices:["It is his colleague's birthday.","His colleague is getting married.","His colleague is retiring.","His colleague is being promoted."], answer:"C", explanation:"'She's retiring after thirty years with the company'라고 했습니다. 정답은 (C)입니다." },
      { number:33, text:"What type of gift does the man prefer?", choices:["Something practical for the office","Something she can display at home","Something edible","Something for travel"], answer:"B", explanation:"'something she can display at home'이라고 했습니다. 정답은 (B)입니다." },
      { number:34, text:"When will the engraved clock be ready if ordered today?", choices:["Tomorrow","Wednesday","Thursday","Friday"], answer:"B", explanation:"'Usually two business days. So if you order today, it will be ready by Wednesday'라고 했습니다. 정답은 (B)입니다." }
    ]
  },
  { // Set 8
    passage: "Woman: Good afternoon. I'd like to open a business checking account.\nMan: Certainly. Do you have your business registration documents and a form of ID with you today?\nWoman: Yes, I have everything here. I also have a cashier's check for the initial deposit.\nMan: Excellent. Our standard minimum opening deposit is five hundred dollars. Is that the amount you'll be depositing today?\nWoman: Actually, I'd like to deposit two thousand dollars to start.\nMan: Perfect. Please have a seat and I'll get started on the paperwork.",
    questions: [
      { number:32, text:"What does the woman want to do?", choices:["Apply for a business loan","Open a business checking account","Inquire about investment options","Transfer funds to another account"], answer:"B", explanation:"'I'd like to open a business checking account'라고 했습니다. 정답은 (B)입니다." },
      { number:33, text:"What documents does the man ask for?", choices:["Business registration documents and ID","A tax return and bank statement","A credit report and references","A lease agreement and utility bill"], answer:"A", explanation:"'business registration documents and a form of ID'를 요청했습니다. 정답은 (A)입니다." },
      { number:34, text:"How much will the woman deposit initially?", choices:["$500","$1,000","$1,500","$2,000"], answer:"D", explanation:"'I'd like to deposit two thousand dollars to start'라고 했습니다. 정답은 (D)입니다." }
    ]
  },
  { // Set 9
    passage: "Man: Ms. Kim, I wanted to discuss the timeline for the Henderson project. We're already two weeks behind schedule.\nWoman: I know. The delay in receiving components from our supplier has really set us back.\nMan: Is there anything we can do to speed things up? The client has a firm deadline of the end of next month.\nWoman: I've already contacted two alternative suppliers. One of them can deliver the parts within five days.\nMan: That's great news. Let's go with them. Can you handle the ordering today?\nWoman: Absolutely. I'll place the order as soon as we're done here.",
    questions: [
      { number:32, text:"What is the problem with the Henderson project?", choices:["The client changed the requirements.","The project is behind schedule.","The budget has been exceeded.","A team member left the company."], answer:"B", explanation:"'we're already two weeks behind schedule'라고 했습니다. 정답은 (B)입니다." },
      { number:33, text:"What caused the delay?", choices:["A lack of qualified staff","A delay in receiving components from a supplier","Unexpected technical problems","Poor project planning"], answer:"B", explanation:"'The delay in receiving components from our supplier'가 원인입니다. 정답은 (B)입니다." },
      { number:34, text:"What will the woman do immediately after the conversation?", choices:["Call the client","Place an order with an alternative supplier","Reschedule the project deadline","Attend a team meeting"], answer:"B", explanation:"'I'll place the order as soon as we're done here'라고 했습니다. 정답은 (B)입니다." }
    ]
  },
  { // Set 10
    passage: "Woman: Hi, I'm calling to check on the status of my job application for the marketing manager position.\nMan: Of course. Can I get your full name and the date you submitted the application?\nWoman: Sure, it's Jennifer Adams. I submitted it on the fourteenth of this month.\nMan: Let me check our system. Yes, I can see your application here. It's currently under review by the hiring committee.\nWoman: Do you have any idea when I might hear back?\nMan: We're planning to contact shortlisted candidates by the end of next week.",
    questions: [
      { number:32, text:"Why is the woman calling?", choices:["To schedule a job interview","To check on her job application status","To ask about the job requirements","To withdraw her application"], answer:"B", explanation:"'calling to check on the status of my job application'이라고 했습니다. 정답은 (B)입니다." },
      { number:33, text:"What position did the woman apply for?", choices:["Sales coordinator","Marketing manager","HR specialist","Operations director"], answer:"B", explanation:"'the marketing manager position'이라고 했습니다. 정답은 (B)입니다." },
      { number:34, text:"When will shortlisted candidates be contacted?", choices:["Today","Early next week","By the end of next week","Within a month"], answer:"C", explanation:"'planning to contact shortlisted candidates by the end of next week'라고 했습니다. 정답은 (C)입니다." }
    ]
  }
],

/* ═══════════════════════════════════════════
   PART 4 — Short Talks (LC)  10 sets
═══════════════════════════════════════════ */
'4': [
  { // Set 1
    passage: "Narrator: Attention all passengers. This is an announcement regarding Flight KA-472 to Singapore. Due to technical maintenance requirements, the departure has been delayed by approximately forty-five minutes. The new departure time is 3:15 P.M. We apologize for any inconvenience. Passengers are welcome to remain in the departure lounge or visit dining and shopping facilities in Terminal B. We will make a further announcement when boarding begins. Thank you for your patience.",
    questions: [
      { number:71, text:"What is the main reason for the announcement?", choices:["To inform passengers of a gate change","To announce a flight delay","To notify passengers of a cancellation","To remind passengers to check in"], answer:"B", explanation:"항공편 지연을 알리는 공지입니다. 정답은 (B)입니다." },
      { number:72, text:"What is the new departure time?", choices:["2:30 P.M.","2:45 P.M.","3:00 P.M.","3:15 P.M."], answer:"D", explanation:"'The new departure time is now 3:15 P.M.'이라고 했습니다. 정답은 (D)입니다." },
      { number:73, text:"What are passengers encouraged to do?", choices:["Return to the check-in counter","Visit Terminal B's facilities","Board the aircraft immediately","Contact the airline's service desk"], answer:"B", explanation:"'visit any of the dining and shopping facilities in Terminal B'를 권장했습니다. 정답은 (B)입니다." }
    ]
  },
  { // Set 2
    passage: "Narrator: Hello, this message is for Mr. James Wallace. My name is Carol from Riverside Medical Center. I'm calling to remind you of your appointment with Dr. Chen this coming Thursday at 10:30 in the morning. Please arrive at least fifteen minutes early to complete any necessary paperwork. Also, remember to bring your insurance card and a list of any current medications. If you need to reschedule, please call us at 555-2400. We look forward to seeing you.",
    questions: [
      { number:71, text:"What is the purpose of this message?", choices:["To confirm a prescription order","To remind a patient of an appointment","To provide medical test results","To request payment for services"], answer:"B", explanation:"목요일 예약을 리마인드하는 전화 메시지입니다. 정답은 (B)입니다." },
      { number:72, text:"What is Mr. Wallace asked to bring?", choices:["A referral letter and photo ID","His insurance card and a medication list","Previous test results and a credit card","His appointment confirmation number"], answer:"B", explanation:"'bring your insurance card and a list of any current medications'이라고 했습니다. 정답은 (B)입니다." },
      { number:73, text:"What should Mr. Wallace do if he cannot make the appointment?", choices:["Visit the clinic in person","Send an email to the doctor","Call 555-2400","Use the online booking system"], answer:"C", explanation:"'please call us at 555-2400'이라고 했습니다. 정답은 (C)입니다." }
    ]
  },
  { // Set 3
    passage: "Narrator: Good morning, everyone. Before we begin today's staff meeting, I'd like to share some exciting news. As of next month, our company will be launching a new employee wellness program. This program will include free gym memberships at partner facilities, monthly health seminars, and access to an online mental health support platform. Participation is entirely voluntary, but we strongly encourage everyone to take advantage of these benefits. Sign-up forms will be distributed by the HR department by the end of this week.",
    questions: [
      { number:71, text:"What is being announced?", choices:["A new office relocation plan","A company wellness program","Updated employee performance guidelines","A change in working hours"], answer:"B", explanation:"'launching a new employee wellness program'이 주요 내용입니다. 정답은 (B)입니다." },
      { number:72, text:"Which of the following is NOT mentioned as part of the program?", choices:["Free gym memberships","Monthly health seminars","Discounted medical checkups","Access to a mental health platform"], answer:"C", explanation:"할인된 건강검진은 언급되지 않았습니다. 정답은 (C)입니다." },
      { number:73, text:"How can employees sign up for the program?", choices:["By visiting the HR website","By speaking with their supervisor","By filling out forms distributed by HR","By sending an email to management"], answer:"C", explanation:"'Sign-up forms will be distributed by the HR department'이라고 했습니다. 정답은 (C)입니다." }
    ]
  },
  { // Set 4
    passage: "Narrator: Welcome to FinanceToday's weekly market update. This week, technology stocks continued to outperform other sectors, driven largely by strong quarterly earnings reports from several major firms. Meanwhile, oil prices fell slightly amid concerns about global demand. The housing market showed signs of stabilization after months of declining activity. Investors will be watching closely for the central bank's interest rate decision scheduled for next Wednesday. Analysts are divided on whether rates will be held steady or reduced.",
    questions: [
      { number:71, text:"What type of broadcast is this?", choices:["A weather forecast","A financial market update","A business news interview","A technology product review"], answer:"B", explanation:"주식·유가·금리 등 금융 시장 업데이트 방송입니다. 정답은 (B)입니다." },
      { number:72, text:"Why did technology stocks perform well this week?", choices:["New government regulations were introduced.","Interest rates were lowered.","Major firms reported strong quarterly earnings.","Oil prices dropped significantly."], answer:"C", explanation:"'driven largely by strong quarterly earnings reports from several major firms'이라고 했습니다. 정답은 (C)입니다." },
      { number:73, text:"What event are investors watching for next week?", choices:["A major technology product launch","A central bank interest rate decision","A housing market report","A quarterly earnings announcement"], answer:"B", explanation:"'the central bank's interest rate decision scheduled for next Wednesday'를 주목하고 있습니다. 정답은 (B)입니다." }
    ]
  },
  { // Set 5
    passage: "Narrator: Thank you for calling Greenfield Public Library. Our main branch is open Monday through Thursday from 9 A.M. to 8 P.M., and Friday through Sunday from 10 A.M. to 6 P.M. To renew a borrowed item, press one. To check availability of a title, press two. To speak with a librarian, press three. Please note that the children's reading room will be closed for renovation from June 1st through June 15th. All children's programs during this period will be relocated to the community hall on the second floor.",
    questions: [
      { number:71, text:"What are the library's hours on Fridays?", choices:["9 A.M. to 8 P.M.","9 A.M. to 6 P.M.","10 A.M. to 8 P.M.","10 A.M. to 6 P.M."], answer:"D", explanation:"'Friday through Sunday from 10 A.M. to 6 P.M.'이라고 했습니다. 정답은 (D)입니다." },
      { number:72, text:"Why will the children's reading room be closed?", choices:["It is being used for a special event.","It is undergoing renovation.","Staff are attending training.","The building is being inspected."], answer:"B", explanation:"'closed for renovation'이라고 했습니다. 정답은 (B)입니다." },
      { number:73, text:"Where will children's programs be held during the closure?", choices:["At a nearby school","In the main reading room","In the community hall on the second floor","At the east branch library"], answer:"C", explanation:"'relocated to the community hall on the second floor'이라고 했습니다. 정답은 (C)입니다." }
    ]
  },
  { // Set 6
    passage: "Narrator: Good evening and welcome to Channel 7 News. Our top story tonight: the city council has approved a $50 million plan to renovate the downtown transit hub. The renovation will include new ticketing systems, expanded waiting areas, and improved accessibility features for passengers with disabilities. Construction is expected to begin in the spring and be completed within eighteen months. During construction, some bus routes will be temporarily rerouted. Affected passengers are advised to check the transit authority's website for updated schedules.",
    questions: [
      { number:71, text:"What is the main topic of this news report?", choices:["A new public transportation route","Approval of a downtown transit hub renovation","Rising transportation costs in the city","A new bus fleet purchase"], answer:"B", explanation:"도심 환승 허브 리노베이션 승인이 주요 내용입니다. 정답은 (B)입니다." },
      { number:72, text:"How much has been approved for the renovation?", choices:["$5 million","$15 million","$50 million","$500 million"], answer:"C", explanation:"'a $50 million plan'이라고 했습니다. 정답은 (C)입니다." },
      { number:73, text:"What should passengers affected by route changes do?", choices:["Contact the city council directly","Visit the transit authority's website","Call the transportation department","Wait for mail notifications"], answer:"B", explanation:"'check the transit authority's website for updated schedules'라고 했습니다. 정답은 (B)입니다." }
    ]
  },
  { // Set 7
    passage: "Narrator: Hello and thank you for calling Horizon Software Support. Our office hours are Monday through Friday, 8 A.M. to 6 P.M. Eastern Time. If you are calling about a billing issue, please press one. For technical support, please press two. To speak with a sales representative, press three. If you are calling outside of office hours, please leave a detailed message and one of our representatives will return your call on the next business day. You can also find answers to common questions on our website at horizon-software.com.",
    questions: [
      { number:71, text:"What kind of company is this call center for?", choices:["A telecommunications company","A software company","A financial services firm","A hardware manufacturer"], answer:"B", explanation:"'Horizon Software Support'이라고 했습니다. 정답은 (B)입니다." },
      { number:72, text:"What should a caller do if they have a billing issue?", choices:["Press one","Press two","Press three","Hold for a representative"], answer:"A", explanation:"'If you are calling about a billing issue, please press one'이라고 했습니다. 정답은 (A)입니다." },
      { number:73, text:"What happens if a caller calls outside of office hours?", choices:["They are automatically transferred to an emergency line.","They can leave a message and receive a callback the next business day.","They are directed to the website only.","They must call back during business hours."], answer:"B", explanation:"'please leave a detailed message and one of our representatives will return your call on the next business day'라고 했습니다. 정답은 (B)입니다." }
    ]
  },
  { // Set 8
    passage: "Narrator: Attention shoppers. Welcome to Parkside Mall. We'd like to remind you that our grand summer sale is now underway, with discounts of up to sixty percent across participating stores. Today only, the first two hundred customers to make a purchase of fifty dollars or more will receive a complimentary mall gift card valued at twenty dollars. To claim your gift card, simply bring your receipt to the information desk on the ground floor. Also, please note that the east parking garage will be closed today for maintenance. We recommend using the west or north parking areas. Thank you for shopping with us.",
    questions: [
      { number:71, text:"What is the main purpose of this announcement?", choices:["To announce the opening of a new store","To inform shoppers about a sale and special offer","To notify shoppers about a parking garage closure only","To announce the mall's new operating hours"], answer:"B", explanation:"여름 세일과 특별 혜택을 안내하는 공지입니다. 정답은 (B)입니다." },
      { number:72, text:"What will the first two hundred qualifying customers receive?", choices:["A free item from participating stores","A twenty-dollar mall gift card","A sixty-percent discount coupon","A free parking pass"], answer:"B", explanation:"'a complimentary mall gift card valued at twenty dollars'를 받습니다. 정답은 (B)입니다." },
      { number:73, text:"Why is the east parking garage closed today?", choices:["It is under construction.","It is being used for a special event.","It is closed for maintenance.","It has reached full capacity."], answer:"C", explanation:"'the east parking garage will be closed today for maintenance'라고 했습니다. 정답은 (C)입니다." }
    ]
  },
  { // Set 9
    passage: "Narrator: Good afternoon. This is a message for all staff from the facilities management team. As part of our ongoing building upgrade program, the elevators in the north wing will be out of service starting this Monday through Wednesday of next week. During this time, please use the elevators in the south wing or the stairwells, which are located at each end of the building. We appreciate your understanding. If you have any concerns or require assistance, particularly those with mobility needs, please contact the facilities team at extension 310 so that we can make appropriate arrangements.",
    questions: [
      { number:71, text:"What is the purpose of this announcement?", choices:["To announce the opening of a new building wing","To inform staff about elevator maintenance","To introduce new building security procedures","To remind staff about fire safety drills"], answer:"B", explanation:"북쪽 동 엘리베이터 정비를 알리는 공지입니다. 정답은 (B)입니다." },
      { number:72, text:"How long will the north wing elevators be out of service?", choices:["One day","Two days","Three days","One week"], answer:"C", explanation:"'starting this Monday through Wednesday'로 월~수 3일간입니다. 정답은 (C)입니다." },
      { number:73, text:"Who should contact the facilities team at extension 310?", choices:["All employees who use the elevators","Staff who need to move heavy equipment","Those who have mobility needs","Employees working on the ground floor"], answer:"C", explanation:"'particularly those with mobility needs, please contact the facilities team'라고 했습니다. 정답은 (C)입니다." }
    ]
  },
  { // Set 10
    passage: "Narrator: Welcome to today's edition of Business Insight Podcast. I'm your host, Mark Reynolds. Today we're discussing the growing trend of remote work and its impact on corporate real estate. According to a recent industry report, over sixty percent of companies have reduced their office space in the past two years as more employees work from home. However, many businesses are now investing in flexible co-working spaces to support employees who still prefer working outside the home. Our guest today, Dr. Patricia Holt, will share her research on how companies are adapting their workplace strategies. Stay tuned.",
    questions: [
      { number:71, text:"What is the main topic of this podcast episode?", choices:["The future of urban housing markets","Remote work and its impact on corporate real estate","New technology tools for remote workers","Investment strategies in the real estate sector"], answer:"B", explanation:"재택근무와 기업 부동산에 대한 영향이 주제입니다. 정답은 (B)입니다." },
      { number:72, text:"According to the report mentioned, what have over sixty percent of companies done?", choices:["Increased their remote workforce","Reduced their office space","Invested in new headquarters","Closed their satellite offices"], answer:"B", explanation:"'over sixty percent of companies have reduced their office space'라고 했습니다. 정답은 (B)입니다." },
      { number:73, text:"Who is the guest on today's podcast?", choices:["A real estate developer","A technology entrepreneur","A researcher named Dr. Patricia Holt","A business journalist"], answer:"C", explanation:"'Our guest today, Dr. Patricia Holt'이라고 했습니다. 정답은 (C)입니다." }
    ]
  }
]

}; // end QUESTION_BANK_LC
