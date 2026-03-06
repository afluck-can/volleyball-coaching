const drills = [
  {
    category: "Setting",
    drills: [
      {
        id: "set-001",
        name: "Wall Setting",
        difficulty: "Beginner",
        duration: "10 min",
        description: "Players set repeatedly against a wall to build hand positioning and touch consistency.",
        objectives: ["Develop consistent hand positioning", "Build wrist and finger strength", "Improve ball control"],
        setup: "Each player needs a ball and a flat wall. Stand 1–2 metres away.",
        instructions: [
          "Square shoulders to the wall.",
          "Set ball to forehead height with fingertips, elbows out.",
          "Extend arms on contact and follow through.",
          "Catch the rebound and repeat immediately."
        ],
        coachingCues: ["'Window frame' — frame the ball before contact", "Push through the ball, don't slap", "Steady platform — no flying elbows"],
        variations: ["Increase distance to wall", "Set continuously without catching", "Move side to side between sets"],
        videoSearchUrl: "https://www.youtube.com/results?search_query=volleyball+wall+setting+drill"
      },
      {
        id: "set-002",
        name: "Triangle Setting",
        difficulty: "Intermediate",
        duration: "15 min",
        description: "Three players form a triangle and rotate setting responsibilities to improve communication and footwork.",
        objectives: ["Improve setting accuracy under movement", "Develop calling habits", "Build reading skills"],
        setup: "3 players in a triangle roughly 4 metres apart.",
        instructions: [
          "Player A tosses to Player B.",
          "Player B sets to Player C.",
          "Player C catches, then tosses to A and joins the rotation.",
          "Call the ball before every contact."
        ],
        coachingCues: ["Move feet first, arms second", "Call 'mine' early", "Set to a consistent target height"],
        variations: ["Add a 4th player", "Use a back-set to one side", "Introduce a target cone at each station"],
        videoSearchUrl: "https://www.youtube.com/results?search_query=volleyball+triangle+setting+drill"
      },
      {
        id: "set-003",
        name: "Target Setting",
        difficulty: "Intermediate",
        duration: "12 min",
        description: "Setter practices delivering accurate sets to a cone or target placed at the ideal hitter's approach zone.",
        objectives: ["Improve setting accuracy", "Simulate match conditions"],
        setup: "Setter at position 2/3. Place a cone at each hitting zone (left, middle, right).",
        instructions: [
          "Toss or pass ball to setter.",
          "Setter calls the target before setting.",
          "Measure success by landing within 0.5 m of the cone."
        ],
        coachingCues: ["Hips and shoulders face target", "Consistent release point", "Vary tempo — high ball vs. quick set"],
        variations: ["Setter starts with a pass first", "Add a blocker to force decisions", "Combine with a live hitter"],
        videoSearchUrl: "https://www.youtube.com/results?search_query=volleyball+target+setting+accuracy+drill"
      },
      {
        id: "set-004",
        name: "Jump Setting Warm-Up",
        difficulty: "Advanced",
        duration: "10 min",
        description: "Setter practices basic jump sets to build timing and aerial contact comfort.",
        objectives: ["Develop jump set timing", "Maintain accuracy while airborne"],
        setup: "Partner or coach tosses to setter at net.",
        instructions: [
          "Toss a high ball toward position 2.",
          "Setter approaches, jumps, and sets before peak of jump.",
          "Land balanced, watch hitter's approach."
        ],
        coachingCues: ["Jump into the ball, not under it", "Quick release at top of jump", "Stay square to your target"],
        variations: ["Set backward over head", "Add a time pressure cue from coach"],
        videoSearchUrl: "https://www.youtube.com/results?search_query=volleyball+jump+set+technique+drill"
      },
      {
        id: "set-005",
        name: "Back Set Isolation",
        difficulty: "Intermediate",
        duration: "12 min",
        description: "Setters practise the back set in isolation to develop consistent release point and accuracy to the right side.",
        objectives: ["Build reliable back set mechanics", "Improve accuracy to right-side hitters"],
        setup: "Setter at position 2/3. Partner or cone target at position 2 (right side).",
        instructions: [
          "Toss ball to setter at position 3.",
          "Setter squares to position 4 (fake direction), then sets backward to position 2.",
          "Target: ball lands within arm's reach of the cone.",
          "10 reps then swap."
        ],
        coachingCues: ["Arch through the back, don't just flick hands", "Hips stay square to the net", "Release point slightly behind the forehead"],
        variations: ["Setter moves from different starting positions", "Live right-side hitter finishes the ball", "Add a middle quick option to force a decision"],
        videoSearchUrl: "https://www.youtube.com/results?search_query=volleyball+back+set+drill+technique"
      },
      {
        id: "set-006",
        name: "Setting on the Move",
        difficulty: "Intermediate",
        duration: "15 min",
        description: "Setter practises arriving late to the ball and setting from off-balance positions to simulate game reality.",
        objectives: ["Maintain set quality under movement", "Develop footwork to the ball"],
        setup: "Coach tosses to varied positions around the setter zone. Setter starts 3 m away.",
        instructions: [
          "Coach tosses ball to different spots near position 2/3.",
          "Setter sprints, plants, and sets to a target hitter or cone.",
          "Emphasise the final two steps before contact.",
          "Rotate after 8 reps."
        ],
        coachingCues: ["Right foot plant points toward target", "Don't reach — move your feet", "Stay tall through the set even when rushed"],
        variations: ["Introduce a pass-first before the set", "Vary height and speed of toss", "Blindfold partner calls out 'outside' or 'right' just before the toss"],
        videoSearchUrl: "https://www.youtube.com/results?search_query=volleyball+setter+footwork+movement+drill"
      },
      {
        id: "set-007",
        name: "Quick Set (Tempo 2) Drill",
        difficulty: "Advanced",
        duration: "12 min",
        description: "Setter practises the low, fast tempo-2 set to a middle hitter to beat the block.",
        objectives: ["Develop quick-set timing with middle hitter", "Beat single blocker with speed"],
        setup: "Middle hitter at position 3. Setter at 2/3. Passer delivers ball from 6.",
        instructions: [
          "Passer sends a controlled pass to setter.",
          "Middle hitter starts approach on passer's contact.",
          "Setter delivers a flat, fast set at the hitter's hitting arm height.",
          "Hitter swings without hesitation."
        ],
        coachingCues: ["Set should arrive as hitter's arm swings up", "Low arc = faster tempo", "Setter and hitter must sync — communicate rhythm"],
        variations: ["Add a single blocker to force timing", "Combine with an outside option as a read", "Track kill % over 20 reps"],
        videoSearchUrl: "https://www.youtube.com/results?search_query=volleyball+quick+set+middle+hitter+tempo+drill"
      }
    ]
  },
  {
    category: "Digging",
    drills: [
      {
        id: "dig-001",
        name: "Coach-on-1 Digging",
        difficulty: "Beginner",
        duration: "10 min",
        description: "Coach hits controlled balls to a digger who platforms the ball back to a target.",
        objectives: ["Build platform technique", "Develop body positioning behind the ball"],
        setup: "Coach at net with basket of balls. One digger in back row. Setter or cone as target.",
        instructions: [
          "Coach hits or tosses hard balls to the digger.",
          "Digger moves to ball, gets low, and platforms to target.",
          "Rotate after 6 contacts."
        ],
        coachingCues: ["Shoulders over knees over toes", "Platform angle controls direction", "Stay low after digging"],
        variations: ["Add a 2nd digger", "Coach varies speed and angle", "Introduce off-speed tips"],
        videoSearchUrl: "https://www.youtube.com/results?search_query=volleyball+digging+drill+coach+on+one"
      },
      {
        id: "dig-002",
        name: "Roll and Dig",
        difficulty: "Intermediate",
        duration: "12 min",
        description: "Players practice emergency digging technique including the forward roll recovery.",
        objectives: ["Build confidence going to the floor", "Connect low dig with roll recovery"],
        setup: "Coach or partner tosses short balls forcing a dive. Open space required.",
        instructions: [
          "Start in ready position.",
          "Coach tosses short ball in front of player.",
          "Player dives forward, contacts ball, rolls safely.",
          "Return to position quickly."
        ],
        coachingCues: ["Lead with hands, not the face", "Roll on shoulder, not spine", "Eyes on ball through contact"],
        variations: ["Add a second ball immediately after recovery", "Alternate dig direction (left/right)"],
        videoSearchUrl: "https://www.youtube.com/results?search_query=volleyball+dive+roll+emergency+dig+technique"
      },
      {
        id: "dig-003",
        name: "Angle vs Line Digging",
        difficulty: "Intermediate",
        duration: "15 min",
        description: "Diggers practice reading the hitter's arm swing to cover angle or line shots.",
        objectives: ["Improve reading hitter cues", "Adjust positioning based on hitter shoulder angle"],
        setup: "Hitter at net (left antenna). Two diggers at 5 and 6.",
        instructions: [
          "Coach sets to hitter.",
          "Hitter swings angle or line (called or random).",
          "Diggers read, adjust, and dig to target."
        ],
        coachingCues: ["Watch the hitter's shoulder, not the ball", "Cheat toward the angle on outside hitters", "Talk to your partner"],
        variations: ["Add a middle hitter option", "Use live game play after pattern"],
        videoSearchUrl: "https://www.youtube.com/results?search_query=volleyball+digging+angle+line+reading+drill"
      },
      {
        id: "dig-004",
        name: "Butterfly Digging",
        difficulty: "Beginner",
        duration: "15 min",
        description: "A continuous flow drill where players cycle through digging, setting, and hitting positions.",
        objectives: ["Build digging endurance", "Practice transition movement"],
        setup: "Two lines: one on each side at position 5. Coach or feeder at net.",
        instructions: [
          "Player digs from position 5.",
          "Moves to set at position 3.",
          "Moves to hit from position 4.",
          "Exits and joins opposite line."
        ],
        coachingCues: ["Sprint between stations", "Reset platform on each new ball", "Communicate before every contact"],
        variations: ["Add block shadow at net", "Increase hitting speed"],
        videoSearchUrl: "https://www.youtube.com/results?search_query=volleyball+butterfly+drill+digging"
      },
      {
        id: "dig-005",
        name: "Pepper (2-Person)",
        difficulty: "Beginner",
        duration: "10 min",
        description: "Two players alternate dig, set, and hit in a continuous rally to warm up all three skills together.",
        objectives: ["Warm up digging, setting, and hitting in sequence", "Develop rhythm and ball control"],
        setup: "Two players facing each other about 4–5 metres apart, no net required.",
        instructions: [
          "Player A hits down-ball to Player B.",
          "Player B digs to themselves, sets to themselves, then hits to Player A.",
          "Player A repeats the cycle.",
          "Count consecutive successful exchanges."
        ],
        coachingCues: ["Stay low in the ready position", "Dig controlled — don't over-arm it", "Set yourself before hitting, not the other way around"],
        variations: ["Add a third player in a line", "Use a real spike instead of down-ball", "Score: 20 in a row to win"],
        videoSearchUrl: "https://www.youtube.com/results?search_query=volleyball+pepper+drill+two+person"
      },
      {
        id: "dig-006",
        name: "Rapid Fire Digging",
        difficulty: "Intermediate",
        duration: "10 min",
        description: "Coach or feeder sends balls quickly one after another to build reactive digging speed and endurance.",
        objectives: ["Build digging reaction time", "Improve lateral movement under fatigue"],
        setup: "One digger in back row. Coach at net with a basket of 10+ balls.",
        instructions: [
          "Coach hits balls rapidly to alternating zones (left-right-deep-short).",
          "Digger contacts every ball and immediately resets.",
          "No break between balls — 10 balls per set.",
          "Rest 30 seconds, repeat 3 sets."
        ],
        coachingCues: ["Stay on your toes between contacts", "Low and wide stance", "Snap back to centre after each dig"],
        variations: ["Increase balls per set", "Add a second digger to split coverage", "Call direction verbally to add cognitive load"],
        videoSearchUrl: "https://www.youtube.com/results?search_query=volleyball+rapid+fire+digging+drill"
      },
      {
        id: "dig-007",
        name: "Libero Defence Patterns",
        difficulty: "Advanced",
        duration: "20 min",
        description: "Libero runs structured defensive patterns against varied attack combinations to simulate match defence.",
        objectives: ["Develop positional defensive reads", "Build libero court coverage habits"],
        setup: "Full back row with libero. Coach or hitters on opposite side hitting to called zones.",
        instructions: [
          "Coach calls the attack option (pipe, outside, right side) before setting.",
          "Libero adjusts position and covers primary dig zone.",
          "After dig, libero transitions to cover the tip.",
          "Run 5 reps per attack pattern."
        ],
        coachingCues: ["Read the setter's hips before moving", "Tip coverage is always the libero's responsibility", "Low and flat on hard swings, up and forward on tips"],
        variations: ["Remove the call — libero reads live", "Add a second hitter option to force a last-second decision", "Track dig-to-set percentage"],
        videoSearchUrl: "https://www.youtube.com/results?search_query=volleyball+libero+defence+patterns+drill"
      }
    ]
  },
  {
    category: "Underhand Passing",
    drills: [
      {
        id: "pass-001",
        name: "Partner Passing",
        difficulty: "Beginner",
        duration: "10 min",
        description: "Two players pass back and forth focusing on platform formation and ball control.",
        objectives: ["Build a flat, consistent platform", "Develop passing accuracy to a partner"],
        setup: "Pairs standing 4–6 metres apart.",
        instructions: [
          "Player 1 tosses or serves easy ball.",
          "Player 2 moves into position, forms platform.",
          "Pass returned to Player 1's hands.",
          "Alternate roles after 10 contacts."
        ],
        coachingCues: ["Thumbs together, arms parallel", "Contact ball on forearms — not wrists", "Body behind the ball"],
        variations: ["Increase distance", "Use a real serve", "Pass while moving side to side"],
        videoSearchUrl: "https://www.youtube.com/results?search_query=volleyball+partner+passing+platform+drill"
      },
      {
        id: "pass-002",
        name: "10 in a Row",
        difficulty: "Beginner",
        duration: "10 min",
        description: "Pairs count consecutive passes without a drop, competing to hit 10 in a row.",
        objectives: ["Build consistency under mild pressure", "Develop communication"],
        setup: "Pairs with one ball, about 5 metres apart.",
        instructions: [
          "Toss and start counting.",
          "Any dropped, misplaced, or uncatchable pass resets the count to zero.",
          "Goal: 10 consecutive controlled passes."
        ],
        coachingCues: ["Call the ball", "Reset stance after each pass", "Consistent arm angle"],
        variations: ["Increase target to 20", "Add movement between each pass", "Three-player triangle version"],
        videoSearchUrl: "https://www.youtube.com/results?search_query=volleyball+passing+consistency+drill+10+in+a+row"
      },
      {
        id: "pass-003",
        name: "Serve-Receive Lanes",
        difficulty: "Intermediate",
        duration: "20 min",
        description: "Passers in their rotational positions receive live serves, passing to a setter target.",
        objectives: ["Apply platform skills to live serve reception", "Develop spatial court awareness"],
        setup: "3 passers in W-formation. Setter at target zone. Server on opposite side.",
        instructions: [
          "Server delivers float or topspin serves.",
          "Passers call, adjust, and pass to setter.",
          "Setter catches and provides feedback.",
          "Rotate server and passers every 5 serves."
        ],
        coachingCues: ["Start behind the ball", "Call 'mine' to claim the ball", "Pass to setter's forehead height"],
        variations: ["Add a live setter and hitter", "Focus on seam passes (between passers)", "Use jump serves"],
        videoSearchUrl: "https://www.youtube.com/results?search_query=volleyball+serve+receive+passing+drill+W+formation"
      },
      {
        id: "pass-004",
        name: "Platform Angle Drill",
        difficulty: "Beginner",
        duration: "8 min",
        description: "Players practice adjusting platform angle to redirect balls thrown from different sides.",
        objectives: ["Understand platform angle mechanics", "Improve directional passing"],
        setup: "One player in centre. Partner tosses from left, right, and front.",
        instructions: [
          "Partner tosses from varied positions.",
          "Passer adjusts platform angle to direct ball to a fixed target.",
          "5 reps per direction then switch."
        ],
        coachingCues: ["Turn your hips, not just your arms", "Low angles for hard balls", "Keep the platform flat"],
        variations: ["Toss faster", "Add a step-over movement before toss"],
        videoSearchUrl: "https://www.youtube.com/results?search_query=volleyball+platform+angle+passing+drill"
      },
      {
        id: "pass-005",
        name: "Deep Corner Passing",
        difficulty: "Intermediate",
        duration: "12 min",
        description: "Passers practise moving quickly to back corners to handle deep serves and keeping the pass playable.",
        objectives: ["Handle deep serves in zones 1 and 5", "Maintain platform control while sprinting"],
        setup: "Server targets deep corners. One or two passers in back row.",
        instructions: [
          "Server serves deep to zone 1 or zone 5 corners.",
          "Passer reads the serve early and sprints to get behind the ball.",
          "Pass to target setter position at zone 2/3.",
          "Rotate server and passer every 6 serves."
        ],
        coachingCues: ["Turn and run — don't shuffle to deep balls", "Get there early enough to stop and plant", "Short arms on a deep ball to keep it off the back wall"],
        variations: ["Mix short and deep serves unpredictably", "Add a second passer for overlap decisions", "Time the sprint — coach calls 'fast' or 'slow' toss"],
        videoSearchUrl: "https://www.youtube.com/results?search_query=volleyball+deep+corner+passing+serve+receive+drill"
      },
      {
        id: "pass-006",
        name: "Seam Passing",
        difficulty: "Advanced",
        duration: "15 min",
        description: "Two passers practise calling and claiming balls deliberately served into the seam between them.",
        objectives: ["Eliminate communication breakdowns on seam balls", "Build decisive calling habits"],
        setup: "Two passers positioned in their rotational zones. Server targets the seam between them.",
        instructions: [
          "Server delivers float serves directly into the seam.",
          "Both passers call immediately — one takes, one backs off.",
          "Debrief after each serve: who called first? Was it the right player?",
          "Run 15 reps per pairing."
        ],
        coachingCues: ["Louder = winner — the first clear call owns the ball", "Back player calls off front player early", "If neither calls, both must sprint — consequence makes the lesson stick"],
        variations: ["Server can target anywhere — passers must still communicate", "Add a libero as the wild card passer", "Use a jump serve for added difficulty"],
        videoSearchUrl: "https://www.youtube.com/results?search_query=volleyball+seam+passing+serve+receive+communication+drill"
      },
      {
        id: "pass-007",
        name: "Pass and Follow",
        difficulty: "Beginner",
        duration: "12 min",
        description: "Players pass to a target then follow their pass to join the next station, building transition habits.",
        objectives: ["Link passing with immediate movement", "Build transition awareness after contact"],
        setup: "Queue of passers at zone 5. Setter at zone 2/3. Coach serves from opposite end.",
        instructions: [
          "Coach serves to passer in zone 5.",
          "Passer receives and passes to setter.",
          "Passer immediately sprints to the setter position.",
          "Setter sets to a hitter or target and follows to that line.",
          "Rotate continuously."
        ],
        coachingCues: ["Don't watch your pass — move immediately", "Sprint, not jog, to the next position", "Call the ball before the passer behind you"],
        variations: ["Add a full swing at the end of the chain", "Increase serve difficulty", "Run both sides simultaneously"],
        videoSearchUrl: "https://www.youtube.com/results?search_query=volleyball+pass+and+follow+transition+drill"
      }
    ]
  },
  {
    category: "Serving",
    drills: [
      {
        id: "serve-001",
        name: "Zone Serving",
        difficulty: "Beginner",
        duration: "10 min",
        description: "Players target specific zones on the opposite court with their serve to build accuracy.",
        objectives: ["Develop serving accuracy", "Identify weaknesses in opponent court positioning"],
        setup: "Mark 6 zones on the receiving court with cones or tape. Server at service line.",
        instructions: [
          "Call out the target zone before serving.",
          "Serve 3 attempts per zone.",
          "Track hits vs misses."
        ],
        coachingCues: ["Toss in front and above your hitting shoulder", "Full arm extension at contact", "Follow through toward target"],
        variations: ["Increase pace", "Add a passer to receive (live pressure)", "Target seams between players"],
        videoSearchUrl: "https://www.youtube.com/results?search_query=volleyball+zone+serving+accuracy+drill"
      },
      {
        id: "serve-002",
        name: "Float Serve Technique",
        difficulty: "Intermediate",
        duration: "12 min",
        description: "Focused repetition on the float serve — no spin contact and a firm wrist.",
        objectives: ["Eliminate wrist snap to produce float effect", "Build consistent toss for float"],
        setup: "Server at end line. Partner observes ball rotation.",
        instructions: [
          "Toss ball to comfortable contact height.",
          "Contact centre of ball with flat, firm hand.",
          "Freeze wrist at contact — no follow-through.",
          "Partner confirms: does the ball float or spin?"
        ],
        coachingCues: ["Firm wrist = no spin", "Hit the 'button' at ball centre", "Short, punchy arm swing"],
        variations: ["Serve from 3 m inside end line first", "Increase to full court gradually", "Partner tracks ball path"],
        videoSearchUrl: "https://www.youtube.com/results?search_query=volleyball+float+serve+technique+tutorial"
      },
      {
        id: "serve-003",
        name: "Pressure Serving Game",
        difficulty: "Intermediate",
        duration: "15 min",
        description: "Players earn points by serving to a zone successfully, lose points for errors, simulating match pressure.",
        objectives: ["Build mental toughness under pressure", "Improve serve consistency"],
        setup: "Full court. Zones marked. Leaderboard visible.",
        instructions: [
          "Each player serves 10 balls.",
          "+2 points for a targeted zone hit, +1 for in-play, -1 for error.",
          "Highest score wins."
        ],
        coachingCues: ["Breathe before each serve", "Same routine every time", "Trust your mechanics"],
        variations: ["Add a receiver who earns points for passing accurately", "Progressive zones (harder = more points)"],
        videoSearchUrl: "https://www.youtube.com/results?search_query=volleyball+pressure+serving+game+drill"
      },
      {
        id: "serve-004",
        name: "Jump Serve Intro",
        difficulty: "Advanced",
        duration: "15 min",
        description: "Introduction to the jump serve — approach, toss, jump, and contact.",
        objectives: ["Develop approach timing for jump serve", "Learn safe toss height and distance"],
        setup: "Server starts 5 m behind end line. Open court.",
        instructions: [
          "Toss ball high and forward (2–3 m in front of service line).",
          "Use a 3 or 4 step approach.",
          "Jump and contact at the peak.",
          "Land inside the court."
        ],
        coachingCues: ["Aggressive toss, not a gentle one", "Jump into the ball", "Snap wrist for topspin"],
        variations: ["Start with a standing jump serve (no approach)", "Target a specific zone", "Add speed incrementally"],
        videoSearchUrl: "https://www.youtube.com/results?search_query=volleyball+jump+serve+tutorial+beginner"
      },
      {
        id: "serve-005",
        name: "Toss Consistency Drill",
        difficulty: "Beginner",
        duration: "8 min",
        description: "Servers isolate and perfect their toss without actually serving, removing mechanics variables.",
        objectives: ["Groove a repeatable toss", "Eliminate toss as the source of serving errors"],
        setup: "Server at end line. Mark an X on the floor 0.3 m in front of the serving foot.",
        instructions: [
          "Toss the ball with serving arm only — no swing.",
          "Ball should land on or within 15 cm of the X.",
          "Do 20 repetitions, counting how many land on target.",
          "Only progress to serving once 15/20 land consistently."
        ],
        coachingCues: ["Release the ball — don't spin it", "Toss with a straight arm, not a wrist flick", "Same height every time — reach up, don't push"],
        variations: ["Eyes closed to feel the motion", "Video yourself from the side to check toss height", "Vary target slightly forward or back to find your sweet spot"],
        videoSearchUrl: "https://www.youtube.com/results?search_query=volleyball+serving+toss+technique+consistency+drill"
      },
      {
        id: "serve-006",
        name: "Short vs Deep Serving",
        difficulty: "Intermediate",
        duration: "15 min",
        description: "Players practise mixing short (zone 2/3) and deep (zone 1/5/6) serves to disrupt passing formations.",
        objectives: ["Develop serve placement variety", "Force passers to move in both directions"],
        setup: "Cones mark a short zone (3 m from net) and deep zones (within 1 m of end line). Full court.",
        instructions: [
          "Alternate: 1 short serve, 1 deep serve.",
          "Short serve targets zones 2 or 3 (just over the net).",
          "Deep serve targets zones 1, 5, or 6.",
          "Add passers once placement is reliable."
        ],
        coachingCues: ["Short serve: softer contact, higher arc", "Deep serve: full power, flat trajectory", "Don't telegraph — same toss, same stance for both"],
        variations: ["Call short or deep to add pressure", "Passers score points for handling both in succession", "Coach calls the target after the toss is released"],
        videoSearchUrl: "https://www.youtube.com/results?search_query=volleyball+short+deep+serve+placement+drill"
      },
      {
        id: "serve-007",
        name: "Serve and Defend",
        difficulty: "Advanced",
        duration: "20 min",
        description: "Server transitions immediately into defensive position after serving, linking serving and defence.",
        objectives: ["Practise transition from serving to defence", "Build serving accountability"],
        setup: "Full court. Server at end line. Receiving team with full passing and attack system.",
        instructions: [
          "Server serves, then immediately sprints to their rotational defensive position.",
          "Receiving team runs a full pass–set–attack sequence.",
          "Serving team defends the attack.",
          "Play out the rally."
        ],
        coachingCues: ["Sprint off the service line — no watching your serve", "Reach defensive position before the setter contacts", "Eyes on the setter, not the passer"],
        variations: ["Server must reach position before ball is set (timed)", "Receiving team gets a bonus point for converting if server is late", "Run with all 6 players rotating"],
        videoSearchUrl: "https://www.youtube.com/results?search_query=volleyball+serve+and+defend+transition+drill"
      }
    ]
  },
  {
    category: "Hitting",
    drills: [
      {
        id: "hit-001",
        name: "Approach and Swing",
        difficulty: "Beginner",
        duration: "10 min",
        description: "Players practise a 3 or 4-step approach and a controlled arm swing without a block.",
        objectives: ["Groove the hitting approach footwork", "Build arm swing mechanics"],
        setup: "Net at full height. Setter or toss machine. Hitter queue at position 4.",
        instructions: [
          "Setter delivers a high outside set.",
          "Hitter completes 3-step approach (R-L-R for right-handed).",
          "Swing through the ball targeting deep corners."
        ],
        coachingCues: ["Explosive last two steps", "Elbow high, swing past the ear", "Snap wrist at contact"],
        variations: ["Cross-body shot", "Line shot", "Roll shot off the block"],
        videoSearchUrl: "https://www.youtube.com/results?search_query=volleyball+hitting+approach+arm+swing+drill"
      },
      {
        id: "hit-002",
        name: "Down Ball Hitting",
        difficulty: "Beginner",
        duration: "8 min",
        description: "Players practise swinging a ball downward while standing (no jump) to focus on arm swing and wrist snap.",
        objectives: ["Reinforce wrist snap and arm swing mechanics"],
        setup: "Players stand at the net or behind attack line. Toss from partner.",
        instructions: [
          "Partner tosses ball to shoulder height.",
          "Hitter stands firm (no jump) and swings down.",
          "Aim for the floor of the opposite court."
        ],
        coachingCues: ["High elbow before swing", "Contact top half of ball", "Wrist snap = topspin"],
        variations: ["Increase speed", "Aim for zone 1 vs zone 5", "Close eyes on first contact to feel mechanics"],
        videoSearchUrl: "https://www.youtube.com/results?search_query=volleyball+down+ball+hitting+wrist+snap+drill"
      },
      {
        id: "hit-003",
        name: "3-2-1 Hitter Rotation",
        difficulty: "Intermediate",
        duration: "20 min",
        description: "Hitters rotate through positions 4, 3, and 2 receiving sets from a live setter.",
        objectives: ["Adapt swing to different set locations", "Build transition movement habits"],
        setup: "Live setter at position 2/3. Three hitter queues at outside, middle, right side.",
        instructions: [
          "Setter rotates: set to position 4 (outside), then 3 (middle), then 2 (right).",
          "Hitters call for the ball and complete full approach.",
          "Rotate lines after 2 hits each."
        ],
        coachingCues: ["Read the setter's hips and hands", "Adjust approach angle to set location", "Communicate with setter"],
        variations: ["Add a block", "Setter makes random choices", "Track hitting efficiency"],
        videoSearchUrl: "https://www.youtube.com/results?search_query=volleyball+hitter+rotation+drill+outside+middle+right"
      },
      {
        id: "hit-004",
        name: "Tip and Attack Decision",
        difficulty: "Advanced",
        duration: "15 min",
        description: "Hitters read a block and choose between a full swing and a tip, building decision-making.",
        objectives: ["Develop off-speed shot decision-making", "Improve attack IQ"],
        setup: "2-person block at net. Setter and hitter queue. Diggers in back row.",
        instructions: [
          "Hitter approaches for a full swing.",
          "If block closes, tip over or around the block.",
          "If block opens, swing through the seam."
        ],
        coachingCues: ["Read the block early — before peak of jump", "Tip to deep corners or behind the setter", "Don't telegraph the tip"],
        variations: ["Add a libero read component", "Score the drill (kill vs dig vs error)"],
        videoSearchUrl: "https://www.youtube.com/results?search_query=volleyball+tip+vs+attack+decision+making+drill"
      },
      {
        id: "hit-005",
        name: "Approach Footwork Without Ball",
        difficulty: "Beginner",
        duration: "8 min",
        description: "Hitters drill the 3 and 4-step approach footwork pattern repeatedly without a ball to build muscle memory.",
        objectives: ["Automate footwork pattern", "Develop explosive penultimate step"],
        setup: "Open floor space. Players in a line, no net required.",
        instructions: [
          "Walk through 3-step approach slowly: right-left-right (for right-handers).",
          "Speed up to full pace — emphasis on the penultimate left step being long and low.",
          "Jump and freeze at the top — check arm position.",
          "20 repetitions, then add ball."
        ],
        coachingCues: ["Penultimate step is long and low — it generates power", "Feet should be shoulder-width at takeoff", "Both arms swing back then forward on jump"],
        variations: ["4-step approach (left-right-left-right)", "Add a clap to simulate arm swing timing", "Do it with eyes closed to feel the pattern"],
        videoSearchUrl: "https://www.youtube.com/results?search_query=volleyball+hitting+approach+footwork+drill+beginner"
      },
      {
        id: "hit-006",
        name: "Wipe the Block",
        difficulty: "Advanced",
        duration: "15 min",
        description: "Hitters practise intentionally hitting off the blocker's hands and out of bounds to score off the block.",
        objectives: ["Develop tool shot off the block", "Turn a blocked attempt into a point"],
        setup: "2-person block at net. Setter and hitter. Coach observes.",
        instructions: [
          "Setter delivers a standard outside set.",
          "Hitter aims to contact the outside hand of the block and deflect out.",
          "Target: ball clips the blocker's hand and lands out of bounds.",
          "10 reps per hitter."
        ],
        coachingCues: ["Aim at the blocker's outside hand, not through the block", "High contact point — don't hit down into the block", "Cross-body swing naturally angles into the outside hand"],
        variations: ["Angle toward the antenna for a tighter wipe", "Add a line shot option as the blocker adjusts", "Track wipe vs stuff ratio"],
        videoSearchUrl: "https://www.youtube.com/results?search_query=volleyball+tool+shot+wipe+block+attack+drill"
      },
      {
        id: "hit-007",
        name: "Pipe Attack Drill",
        difficulty: "Intermediate",
        duration: "15 min",
        description: "Back row hitters practise the pipe attack — a back-row middle attack from zone 6.",
        objectives: ["Develop back-row attack option from zone 6", "Build approach timing behind the attack line"],
        setup: "Setter at zone 2/3. Back-row hitter at zone 6. Pass delivered from zone 5.",
        instructions: [
          "Passer sends ball to setter.",
          "Zone 6 hitter approaches from behind the 3m line.",
          "Setter delivers a medium-height set to zone 6.",
          "Hitter contacts ball behind the attack line and drives cross-court or line."
        ],
        coachingCues: ["Takeoff must be completely behind the 3m line", "Approach angle straight up the middle", "Contact at peak — don't wait for the ball to drop"],
        variations: ["Add a block to force decision-making", "Combine with a live outside option", "Track kill percentage"],
        videoSearchUrl: "https://www.youtube.com/results?search_query=volleyball+pipe+attack+back+row+drill"
      }
    ]
  },
  {
    category: "Blocking",
    drills: [
      {
        id: "block-001",
        name: "Footwork Shadowing",
        difficulty: "Beginner",
        duration: "8 min",
        description: "Blockers shadow the setter's delivery with lateral footwork along the net without a ball.",
        objectives: ["Build block footwork patterns", "Develop read-and-react habits at the net"],
        setup: "2–3 blockers at net. Coach calls setter positions.",
        instructions: [
          "Start at middle blocker position.",
          "Coach calls 'Outside!', 'Right side!', or 'Middle!'",
          "Blocker shuffles or runs to correct position and executes a jump-and-penetrate motion."
        ],
        coachingCues: ["Lead with the outside foot", "Square shoulders before jumping", "Penetrate hands over the net"],
        variations: ["Add a live setter for timing reads", "Use quick sets to speed up footwork"],
        videoSearchUrl: "https://www.youtube.com/results?search_query=volleyball+blocking+footwork+shadowing+drill"
      },
      {
        id: "block-002",
        name: "1v1 Block Drill",
        difficulty: "Intermediate",
        duration: "15 min",
        description: "One blocker vs. one hitter in a focused one-on-one competition.",
        objectives: ["Improve timing against a real approach", "Build competitive blocking confidence"],
        setup: "Setter at position 2/3. One hitter at position 4. One blocker at same side.",
        instructions: [
          "Setter delivers a consistent set.",
          "Hitter attacks, blocker attempts to close.",
          "Track kills vs. digs vs. blocks."
        ],
        coachingCues: ["Watch the hitter's shoulder, not the ball", "Hands tight together at contact", "Don't jump too early"],
        variations: ["Add a line vs angle call from coach", "Allow hitter to tip or roll", "Blocker starts slightly late to build timing"],
        videoSearchUrl: "https://www.youtube.com/results?search_query=volleyball+1v1+blocking+drill+hitter+vs+blocker"
      },
      {
        id: "block-003",
        name: "Double Block Closing",
        difficulty: "Intermediate",
        duration: "15 min",
        description: "Middle blocker reads outside set and closes with outside blocker to form a two-person block.",
        objectives: ["Improve middle blocker closing speed", "Build blocker communication"],
        setup: "Two blockers (middle and outside). Setter and hitter on opposite side.",
        instructions: [
          "Coach or setter sets to outside.",
          "Middle reads and runs to close with outside blocker.",
          "Both jump together and penetrate."
        ],
        coachingCues: ["Middle initiates run immediately on setter contact", "Outside blocker holds position and waits for middle", "Call 'line' or 'angle' before jumping"],
        variations: ["Add a back-set to right side", "Middle closes to both sides alternately", "Live hitter with full swing"],
        videoSearchUrl: "https://www.youtube.com/results?search_query=volleyball+double+block+closing+middle+blocker+drill"
      },
      {
        id: "block-004",
        name: "Swing Blocking",
        difficulty: "Advanced",
        duration: "12 min",
        description: "Outside blockers practise a swing block technique to improve reach and close angles.",
        objectives: ["Develop swing block arm mechanics", "Increase blocking reach on outside"],
        setup: "Outside blocker at net. Coach tosses to hitter.",
        instructions: [
          "Blocker positions outside shoulder at antenna.",
          "On jump, swing outside arm across body to close inside angle.",
          "Keep hands firm and penetrate net plane."
        ],
        coachingCues: ["Don't swing so far you lose control", "Arm swing generates extra height", "Turn palms toward the court on contact"],
        variations: ["Use a full hitting team", "Add a coach call for swing vs straight block"],
        videoSearchUrl: "https://www.youtube.com/results?search_query=volleyball+swing+block+technique+outside+blocker"
      },
      {
        id: "block-005",
        name: "Read Block vs Commit Block",
        difficulty: "Advanced",
        duration: "20 min",
        description: "Blockers practise distinguishing when to commit-jump early (fast offence) vs. read-and-react (slow offence).",
        objectives: ["Develop block decision-making", "Apply the right block strategy to different tempos"],
        setup: "Full hitting system with setter. Blocker at middle or outside. Coach calls tempo.",
        instructions: [
          "Coach signals 'Fast' (commit block) or 'Slow' (read block) before the pass.",
          "On 'Fast': blocker jumps with the hitter on a quick set.",
          "On 'Slow': blocker reads the set direction, then closes and jumps.",
          "Run 5 reps per tempo per side."
        ],
        coachingCues: ["Commit block: jump with the setter's hands, not the hitter's approach", "Read block: wait until the ball leaves the setter's hands", "Wrong strategy = get tooled or blocked out — use this as feedback"],
        variations: ["Remove the coach signal — blocker reads the pass height to decide", "Live full-team play after the pattern", "Track stuff-blocks vs tool shots per strategy"],
        videoSearchUrl: "https://www.youtube.com/results?search_query=volleyball+commit+block+read+block+strategy+drill"
      },
      {
        id: "block-006",
        name: "Hands and Penetration Drill",
        difficulty: "Beginner",
        duration: "10 min",
        description: "Blockers focus solely on correct hand position and net penetration without worrying about timing or movement.",
        objectives: ["Build correct hand shape over the net", "Eliminate net touches caused by poor arm angle"],
        setup: "Blocker at net. Coach stands on a box on the other side at hitter height.",
        instructions: [
          "Blocker jumps from a standing position directly below the net.",
          "At the top, extend arms over the net — palms facing the court, fingers spread.",
          "Coach pushes a ball into the hands to simulate contact.",
          "Hold the position and check: are hands over the net? Palms down?"
        ],
        coachingCues: ["Reach over, not into, the net", "Spread fingers — a wide hand covers more court", "Wrists firm — don't let the ball bend your wrists back"],
        variations: ["Add lateral movement before the jump", "Blindfolded jump to focus on feel", "Partner provides verbal feedback on hand angle"],
        videoSearchUrl: "https://www.youtube.com/results?search_query=volleyball+blocking+hands+penetration+technique+drill"
      },
      {
        id: "block-007",
        name: "Three-Person Blocking Rotation",
        difficulty: "Advanced",
        duration: "20 min",
        description: "All three front-row blockers work together against a full attack system, running block assignments for every offensive position.",
        objectives: ["Coordinate three-person blocking assignments", "Reduce seams and holes in the block"],
        setup: "Full front row of three blockers. Full opposite-side attack system with setter and three hitters.",
        instructions: [
          "Opposite team runs a full pass–set–attack system.",
          "Blockers execute: outside pair (OH + MB) close on outside, right pair (MB + OPP) close on right, middle triple on pipe.",
          "MB is always responsible for closing the pair.",
          "Debrief after each attack: was the block assignment correct?"
        ],
        coachingCues: ["MB: read early, move fast, arrive before the hitter jumps", "Outside blocker: hold your spot, let MB come to you", "Hands always touch in the block — no seam"],
        variations: ["Run against a no-read offence (setter runs all quick sets)", "Score: block point = 3, stuff = 5, tool = -1", "Video and review assignments"],
        videoSearchUrl: "https://www.youtube.com/results?search_query=volleyball+three+person+blocking+system+team+drill"
      }
    ]
  }
]

export default drills
