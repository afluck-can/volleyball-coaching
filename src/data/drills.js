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
        variations: ["Increase distance to wall", "Set continuously without catching", "Move side to side between sets"]
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
        variations: ["Add a 4th player", "Use a back-set to one side", "Introduce a target cone at each station"]
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
        variations: ["Setter starts with a pass first", "Add a blocker to force decisions", "Combine with a live hitter"]
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
        variations: ["Set backward over head", "Add a time pressure cue from coach"]
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
        variations: ["Add a 2nd digger", "Coach varies speed and angle", "Introduce off-speed tips"]
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
        variations: ["Add a second ball immediately after recovery", "Alternate dig direction (left/right)"]
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
        variations: ["Add a middle hitter option", "Use live game play after pattern"]
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
        variations: ["Add block shadow at net", "Increase hitting speed"]
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
        variations: ["Increase distance", "Use a real serve", "Pass while moving side to side"]
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
        variations: ["Increase target to 20", "Add movement between each pass", "Three-player triangle version"]
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
        variations: ["Add a live setter and hitter", "Focus on seam passes (between passers)", "Use jump serves"]
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
        variations: ["Toss faster", "Add a step-over movement before toss"]
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
        variations: ["Increase pace", "Add a passer to receive (live pressure)", "Target seams between players"]
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
        variations: ["Serve from 3 m inside end line first", "Increase to full court gradually", "Partner tracks ball path"]
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
        variations: ["Add a receiver who earns points for passing accurately", "Progressive zones (harder = more points)"]
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
        variations: ["Start with a standing jump serve (no approach)", "Target a specific zone", "Add speed incrementally"]
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
        variations: ["Cross-body shot", "Line shot", "Roll shot off the block"]
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
        variations: ["Increase speed", "Aim for zone 1 vs zone 5", "Close eyes on first contact to feel mechanics"]
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
        variations: ["Add a block", "Setter makes random choices", "Track hitting efficiency"]
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
        coachingCues: ["Read the block early — before peak of jump", "Tip to deep corners or behind the setter", "Don't telegraphs the tip"],
        variations: ["Add a libero read component", "Score the drill (kill vs dig vs error)"]
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
        variations: ["Add a live setter for timing reads", "Use quick sets to speed up footwork"]
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
        variations: ["Add a line vs angle call from coach", "Allow hitter to tip or roll", "Blocker starts slightly late to build timing"]
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
        variations: ["Add a back-set to right side", "Middle closes to both sides alternately", "Live hitter with full swing"]
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
        variations: ["Use a full hitting team", "Add a coach call for swing vs straight block"]
      }
    ]
  }
]

export default drills
