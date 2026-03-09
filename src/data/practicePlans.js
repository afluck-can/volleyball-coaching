// Pre-made practice plan templates.
// Each plan matches the section/drill structure used in PracticePlan.jsx.
// Sources: bestvolleyballdrills.com, skillshark.com, getthepancake.com, theartofcoachingvolleyball.com

const plans = [
  // ─── BEGINNER ────────────────────────────────────────────────────────────────
  {
    id: 'plan-beg-001',
    name: 'First Touch Fundamentals',
    duration: 60,
    level: 'Beginner',
    players: '8–12',
    theme: 'First Touch Fundamentals — Passing & Serving',
    phase: 'Early Season / Introduction',
    outcomes: 'Players can form a consistent platform, serve cross-court, and communicate on the ball.',
    sections: [
      {
        name: 'Warm-up',
        drills: [
          {
            code: 'WRM001',
            name: 'Dynamic Warm-up',
            duration: 5,
            objective: 'Prepare muscles and activate movement patterns before ball contact.\n\nLight jog × 2 laps, side shuffles, high knees, butt kicks, walking lunges, quad stretch.',
            successCriteria: 'All players complete full range of motion and arrive at next drill with elevated heart rate.',
            referencePoints: 'Keep movements controlled — this is activation, not a sprint session.\nMake it dynamic, not static stretching.',
            variations: 'Add a short reactive game (coach claps = sprint, coach raises arm = freeze) to sharpen focus.',
          },
          {
            code: 'WRM002',
            name: 'Downball Warm-up Game',
            duration: 10,
            objective: 'Activate arms and court awareness with a low-stakes ball contact game.\n\nTwo teams hit downballs across the net — no spike jumps, feet stay on the floor.',
            successCriteria: 'Players are moving, communicating, and contacting the ball within the first 3 minutes.',
            referencePoints: 'Call the ball before every touch. Stay low in ready position between contacts.',
            variations: 'Limit to underhand passes only to reinforce platform mechanics.',
          },
        ],
      },
      {
        name: 'Technical',
        drills: [
          {
            code: 'PASS001',
            name: 'Partner Passing — Platform Focus',
            duration: 10,
            objective: 'Build a flat, consistent platform and develop directional passing accuracy.\n\nPairs 4–5 m apart. Player 1 tosses; Player 2 passes back to hands. Swap roles after 10.',
            successCriteria: '8/10 passes returnable to partner without moving more than one step.',
            referencePoints: 'Thumbs together, arms flat — no wrist gap.\nContact on forearms, not wrists.\nBody must be BEHIND the ball before contact.',
            variations: 'Increase distance to 6 m. Add a shuffle step before each pass.',
          },
          {
            code: 'SERVE001',
            name: 'Serving Progressions',
            duration: 10,
            objective: 'Develop consistent overhead serve with repeatable toss and full arm extension.\n\nStart from 3 m inside the end line. Progress to full court.',
            successCriteria: '7/10 serves land in play on the opposite half from full distance.',
            referencePoints: 'Toss in front and above the hitting shoulder — not behind the head.\nFull arm extension at contact.\nFollow through toward target.',
            variations: 'Zone target: mark a cone at zones 1 and 5. Serve to alternate corners.',
          },
          {
            code: 'HIT001',
            name: 'Hitting Lines Introduction',
            duration: 10,
            objective: 'Introduce the 3-step approach footwork and basic arm swing at the net.\n\nSetter delivers a high outside set. Hitters complete approach and swing.',
            successCriteria: 'Hitter contacts ball above net height with a snapping wrist finish.',
            referencePoints: 'Right-foot lead on step 3 (right-handers). Explosive penultimate step.\nElbow high before swing — "bow and arrow" shape.',
            variations: 'Down-ball version (no jump) first. Add jump once footwork is consistent.',
          },
        ],
      },
      {
        name: 'Competitive',
        drills: [
          {
            code: 'GAME001',
            name: 'Queen / King of the Court',
            duration: 20,
            objective: 'Apply passing, serving, and hitting in a competitive, high-repetition game format.\n\nWinning team stays on court. Losing team rotates off and a new team enters.',
            successCriteria: 'Players call the ball before every contact. Rallies average 3+ touches.',
            referencePoints: 'Keep score visible. Winning team earns the right to stay — pressure builds serve quality.',
            variations: 'Add a rule: team must achieve a perfect pass before attacking.',
          },
        ],
      },
      {
        name: 'Cool-down',
        drills: [
          {
            code: 'CDN001',
            name: 'Team Stretch & Debrief',
            duration: 5,
            objective: 'Lower heart rate, stretch key muscle groups, and consolidate the session\'s key learnings.',
            successCriteria: 'Each player names one thing they improved and one thing to work on next session.',
            referencePoints: 'Hamstring, quad, shoulder, and calf stretches — 30 s each.\nCoach identifies 1–2 positives and 1 focus for next practice.',
            variations: '',
          },
        ],
      },
    ],
  },

  {
    id: 'plan-beg-002',
    name: 'Setting & Passing Foundations',
    duration: 60,
    level: 'Beginner',
    players: '8–12',
    theme: 'Setting & Passing — Ball Control Fundamentals',
    phase: 'Early Season',
    outcomes: 'Players can distinguish platform vs. overhead pass, set a consistent ball to a partner, and begin serve-receive.',
    sections: [
      {
        name: 'Warm-up',
        drills: [
          {
            code: 'WRM003',
            name: '3-Touch Pepper',
            duration: 15,
            objective: 'Warm up digging, setting, and hitting in one continuous sequence.\n\nPairs: Player A hits a downball to B. B digs, sets to self, then hits back to A.',
            successCriteria: 'Pairs reach 10 consecutive successful exchanges.',
            referencePoints: 'Dig controlled — pass height should be attackable by self.\nStay low between contacts.',
            variations: 'Add a third player to extend the chain.',
          },
        ],
      },
      {
        name: 'Technical',
        drills: [
          {
            code: 'SET001',
            name: 'Wall Setting',
            duration: 10,
            objective: 'Build consistent hand shape and wrist extension against a wall.\n\nStand 1–2 m from wall. Set the ball and catch the rebound. 20 continuous reps.',
            successCriteria: '15/20 sets rebound directly back without chasing more than half a step.',
            referencePoints: '"Window frame" — frame the ball before contact at forehead height.\nPush through the ball; no slapping.',
            variations: 'Continuous setting (no catch). Move side to side after each set.',
          },
          {
            code: 'SET002',
            name: 'Triangle Setting',
            duration: 15,
            objective: 'Practise setting accuracy while moving, with communication habits.\n\nThree players in a triangle 4 m apart. A tosses → B sets → C catches and tosses → rotate.',
            successCriteria: 'Every set is catchable without the receiver moving more than one step.',
            referencePoints: 'Call "mine" before every contact. Move feet before moving arms.',
            variations: 'Introduce a back-set to one station.',
          },
          {
            code: 'PASS003',
            name: 'Platform Angle Drill',
            duration: 10,
            objective: 'Teach players how to redirect the ball by adjusting platform angle.\n\nPasser stands in centre; partner tosses from left, right, and front. Passer redirects to a fixed cone.',
            successCriteria: '7/10 redirects land within 1 m of the target cone.',
            referencePoints: 'Turn your hips, not just your arms. Low angles for hard balls.',
            variations: 'Toss faster. Add a shuffle step before the toss.',
          },
        ],
      },
      {
        name: 'Competitive',
        drills: [
          {
            code: 'GAME002',
            name: '10 in a Row Challenge',
            duration: 15,
            objective: 'Count consecutive passes between two players — reset to zero on any error.',
            successCriteria: 'At least one pair reaches 10 in a row during the session.',
            referencePoints: 'Call the ball. Reset stance and platform after each contact.',
            variations: 'Extend target to 20. Add a third player to a triangle.',
          },
        ],
      },
      {
        name: 'Cool-down',
        drills: [
          {
            code: 'CDN001',
            name: 'Team Stretch & Debrief',
            duration: 10,
            objective: 'Stretch shoulders, wrists, hamstrings, calves. Debrief 2 key setting/passing cues.',
            successCriteria: '',
            referencePoints: '',
            variations: '',
          },
        ],
      },
    ],
  },

  // ─── INTERMEDIATE ─────────────────────────────────────────────────────────────
  {
    id: 'plan-int-001',
    name: 'Serve, Pass & Attack',
    duration: 90,
    level: 'Intermediate',
    players: '10–14',
    theme: 'Serve, Pass & Attack System',
    phase: 'Pre-Season / Build Phase',
    outcomes: '80% serve in-play rate; positive pass rate above 60%; hitters converting 3+ kills per set.',
    sections: [
      {
        name: 'Warm-up',
        drills: [
          {
            code: 'WRM004',
            name: 'Dynamic Movement Sequence',
            duration: 10,
            objective: 'Full-body activation: jog, side shuffle, carioca, high knees, butt kicks, lunges, 75% sprints.',
            successCriteria: 'All players complete full sequence; 75% sprint without signs of early fatigue.',
            referencePoints: 'Controlled movements — activation, not competition. Full range of motion.',
            variations: '',
          },
        ],
      },
      {
        name: 'Technical',
        drills: [
          {
            code: 'PASS004',
            name: 'Pipeline Passing',
            duration: 5,
            objective: 'Develop passing accuracy under lateral movement demands.\n\nPairs with two tape lines 4 m apart. Toss-and-pass; after each touch shuffle right to the tape line and back.',
            successCriteria: '10 consecutive passes without error before rotating to new partner.',
            referencePoints: 'Get feet set before contact. Platform angle controls direction.',
            variations: 'Force left/right shuffle alternately.',
          },
          {
            code: 'PASS005',
            name: 'Serve Receive Rotation',
            duration: 10,
            objective: 'Apply platform skills under live serve pressure.\n\n3 rotating lines: servers, setters, passers. Server initiates; passer passes to setter; setter overhead tosses up; rotate positions.',
            successCriteria: 'Smooth transitions. Passes consistently within arm reach of setter.',
            referencePoints: 'Start behind the ball. Call "mine" clearly.',
            variations: 'Add float serves. Add a live set and hit to finish.',
          },
          {
            code: 'SERVE002',
            name: '10 Serves In — Race',
            duration: 10,
            objective: 'Build serving consistency under competitive time pressure.\n\nGroups of 3–4 with 3–5 balls each. On whistle, all serve simultaneously. First group to land 10 in-bounds wins.',
            successCriteria: 'Winning team achieves 10 in-bounds serves; all teams complete the round.',
            referencePoints: 'Pressure builds; emphasise technique doesn\'t change under speed.',
            variations: 'Restrict serves to a specific zone (e.g., deep corners only).',
          },
          {
            code: 'SERVE003',
            name: 'Miss the Chairs — Target Serving',
            duration: 10,
            objective: 'Develop serve placement precision.\n\nThree cones/chairs placed on backcourt. Servers aim BETWEEN the cones — missing a cone = in play. Hitting a cone = consequence (push-ups).',
            successCriteria: '3–5 clean attempts per player landing between the targets.',
            referencePoints: 'Same toss and swing for every serve. Pick a spot, commit.',
            variations: 'Move cones to create different gap sizes.',
          },
        ],
      },
      {
        name: 'Competitive',
        drills: [
          {
            code: 'GAME003',
            name: '6v6 Play and Apply',
            duration: 40,
            objective: 'Execute serving, passing, and attack skills in a full match-speed environment.\n\nTwo teams of six. Multiple sets with rotation. Minimum 2 "drill timeouts" to address technique.',
            successCriteria: 'Teams run at least 3 full rally sequences using serve-receive + attack each set.',
            referencePoints: 'Highlight correct execution immediately. Address bad habits with a quick demo before resuming.',
            variations: 'Handicap rule: winning team must achieve a perfect pass before attacking.',
          },
        ],
      },
      {
        name: 'Cool-down',
        drills: [
          {
            code: 'CDN002',
            name: 'Cool-down Stretch',
            duration: 5,
            objective: 'Hamstring, calf, shoulder, tricep, cat-cow, hip rotator — 30 s each.',
            successCriteria: '',
            referencePoints: 'Encourage players to share one takeaway from the session.',
            variations: '',
          },
        ],
      },
    ],
  },

  {
    id: 'plan-int-002',
    name: 'Defensive Systems & Transition',
    duration: 90,
    level: 'Intermediate',
    players: '10–14',
    theme: 'Defensive Systems — Digging, Reading & Transition',
    phase: 'Mid-Season',
    outcomes: 'Reduce unforced defensive errors by 30%; establish consistent dig-set-attack transition flow.',
    sections: [
      {
        name: 'Warm-up',
        drills: [
          {
            code: 'WRM005',
            name: 'Over the Net Pepper (Crossing Patterns)',
            duration: 15,
            objective: 'Ball-control warm-up over the net with pairs crossing paths to simulate game movement.\n\nPartners on opposite sides of the net — dig, set, hit pattern. After every contact, player crosses under the net.',
            successCriteria: 'Pairs maintain rally for 8+ consecutive contacts.',
            referencePoints: 'Control the dig — accuracy matters more than power here.\nCommunicate before crossing.',
            variations: 'Restrict to platform passes only.',
          },
        ],
      },
      {
        name: 'Technical',
        drills: [
          {
            code: 'DIG001',
            name: 'Coach-on-1 Digging',
            duration: 10,
            objective: 'Build platform technique and body positioning under controlled attack pressure.\n\nCoach at net with basket. Digger in back row passes each ball to a target. Rotate after 6 contacts.',
            successCriteria: '5/6 digs returnable to setter target area.',
            referencePoints: 'Shoulders over knees over toes — stay low.\nPlatform angle directs the ball; don\'t swing at it.',
            variations: 'Coach varies angle and speed. Add off-speed tips.',
          },
          {
            code: 'DIG002',
            name: 'Angle vs. Line Reading',
            duration: 15,
            objective: 'Train diggers to read hitter shoulder angle and pre-position for angle or line.\n\nHitter at left antenna. Two diggers at positions 5 and 6. Coach sets; hitter swings angle or line.',
            successCriteria: 'Diggers adjust position before the hitter contacts the ball on 6/10 reps.',
            referencePoints: 'Watch the hitter\'s SHOULDER, not the ball.\nCheat toward angle on outside hitters.',
            variations: 'Add a middle hitter option. Remove coach call — diggers read live.',
          },
          {
            code: 'DIG003',
            name: 'Butterfly Dig–Set–Hit',
            duration: 15,
            objective: 'Build digging endurance and transition movement habits in a continuous flow drill.\n\nTwo lines at position 5. Player digs → moves to set at position 3 → moves to hit from position 4 → exits opposite line.',
            successCriteria: 'Continuous flow with no pauses between stations. Dig-to-set within 2 touches.',
            referencePoints: 'Sprint between stations. Reset platform shape before each new ball.',
            variations: 'Add block shadow at net. Increase hit speed.',
          },
        ],
      },
      {
        name: 'Competitive',
        drills: [
          {
            code: 'GAME004',
            name: '5v5 — Dig with One Block',
            duration: 30,
            objective: 'Full defensive system applied in a modified game: single blocker only, so back-row diggers must cover the full court.\n\nOne blocker at net. Four back-row defenders. Opposite team runs full attack system.',
            successCriteria: 'Defensive team digs and transitions to a playable ball 40%+ of attacks.',
            referencePoints: 'Blocker calls "line" or "angle" so diggers can pre-set coverage.\nLibero or best passer covers the seam.',
            variations: 'Progress to two-person block when defence stabilises.',
          },
        ],
      },
      {
        name: 'Cool-down',
        drills: [
          {
            code: 'CDN003',
            name: 'Stretch & Video Review',
            duration: 5,
            objective: 'Static stretch. If possible, review one clip of a dig or transition from practice.',
            successCriteria: '',
            referencePoints: '',
            variations: '',
          },
        ],
      },
    ],
  },

  {
    id: 'plan-int-003',
    name: 'Blocking & Attacking Systems',
    duration: 90,
    level: 'Intermediate',
    players: '10–14',
    theme: 'Blocking & Attacking — Net Presence',
    phase: 'Mid-Season',
    outcomes: 'Blockers close 60%+ of outside sets with a two-person block; hitters convert tips and swings off block reads.',
    sections: [
      {
        name: 'Warm-up',
        drills: [
          {
            code: 'WRM006',
            name: 'Block Footwork Shadowing',
            duration: 10,
            objective: 'Activate blocking movement patterns without a ball.\n\nCoach calls "Outside!", "Right!", or "Middle!" Blockers shuffle/run to position and execute a jump-and-penetrate motion.',
            successCriteria: 'Blockers reach correct position with both hands above the net on every rep.',
            referencePoints: 'Lead with the outside foot on lateral runs.\nSquare shoulders before jumping.',
            variations: 'Add a live setter for timing reads.',
          },
          {
            code: 'WRM007',
            name: 'Attack Arm Swing Warm-up',
            duration: 5,
            objective: 'Loosen hitting shoulder with a controlled partner swing.\n\nHitter swings a downball to a partner — no jump. Partner catches.',
            successCriteria: 'Ball delivered consistently to partner\'s hands at shoulder height.',
            referencePoints: 'Discourage floor contact. High elbow before swing.',
            variations: '',
          },
        ],
      },
      {
        name: 'Technical',
        drills: [
          {
            code: 'BLOCK001',
            name: '1v1 Blocker vs. Hitter',
            duration: 15,
            objective: 'Blocker works on timing a single hitter; hitter works on choosing angle, line, or tip.\n\nSetter delivers consistent outside set. One blocker vs. one hitter. Track: kill / block / dig.',
            successCriteria: 'Blocker touches 3+ balls per 10-rep set. Hitter converts 4+ kills.',
            referencePoints: 'Blocker: watch the shoulder, not the ball. Don\'t jump too early.\nHitter: read whether block closes before committing to direction.',
            variations: 'Allow hitter to tip. Add a line vs. angle call.',
          },
          {
            code: 'BLOCK002',
            name: 'Double Block Closing',
            duration: 15,
            objective: 'Middle blocker reads an outside set and closes with the outside blocker.\n\nCoach sets to outside. Middle runs to close. Both jump together and penetrate.',
            successCriteria: 'Middle arrives before the hitter leaves the floor on 7/10 reps.',
            referencePoints: 'Middle initiates run on setter contact — not on hitter\'s approach.\nOutside holds position and waits for middle.',
            variations: 'Add back-set to right side. Middle closes to both sides alternately.',
          },
          {
            code: 'HIT002',
            name: 'Tip and Attack Decision',
            duration: 15,
            objective: 'Hitters read the block and choose a full swing vs. a tip.\n\n2-person block. Setter + hitter queue. Diggers in back row. If block closes → tip; if block opens → swing.',
            successCriteria: 'Hitters make the correct read on 6/10 reps as judged by coach.',
            referencePoints: 'Read the block BEFORE peak of jump.\nTip to deep corners or behind the setter.',
            variations: 'Score the drill: kill=2, dig=1, error=0.',
          },
        ],
      },
      {
        name: 'Competitive',
        drills: [
          {
            code: 'GAME005',
            name: 'Hitter vs. Blocker Live Game',
            duration: 30,
            objective: 'Full attacking system vs. full blocking/defensive system. Alternate side-out and serve.\n\nTrack side-out %, block points, and attack errors.',
            successCriteria: 'Attacking team achieves 50%+ side-out. Blocking team earns 2+ block points per set.',
            referencePoints: 'Post scores after each set so pressure builds.',
            variations: 'Winner stays rule for blockers — beaten team rotates off.',
          },
        ],
      },
      {
        name: 'Cool-down',
        drills: [
          {
            code: 'CDN004',
            name: 'Cool-down & Individual Feedback',
            duration: 5,
            objective: 'Full-body stretch. Coach delivers one individual note to each player before leaving.',
            successCriteria: '',
            referencePoints: '',
            variations: '',
          },
        ],
      },
    ],
  },

  // ─── ADVANCED ─────────────────────────────────────────────────────────────────
  {
    id: 'plan-adv-001',
    name: 'Side-Out Offence & Transition',
    duration: 120,
    level: 'Advanced',
    players: '12+',
    theme: 'First Ball Side-Out (FBSO) & Transition Attack',
    phase: 'In-Season / Competition Prep',
    outcomes: 'FBSO rate above 55%; transition kills above 40%; zero serve errors in last 15 min of practice.',
    sections: [
      {
        name: 'Warm-up',
        drills: [
          {
            code: 'WRM008',
            name: 'Northwestern 3-Step Warm-up',
            duration: 10,
            objective: 'Structured movement warm-up: shuffle, carioca, approach footwork, arm swings — progressively increasing intensity.',
            successCriteria: 'Full team completes all stages without stopping.',
            referencePoints: 'Each stage builds on the last — don\'t skip stages.',
            variations: '',
          },
          {
            code: 'WRM009',
            name: 'Triangle Pepper',
            duration: 10,
            objective: 'Three-person ball-control warm-up at game speed.\n\nPlayer A digs to B → B sets to C → C hits to A → rotate.',
            successCriteria: 'Triangles maintain 15+ consecutive contacts.',
            referencePoints: 'Communicate constantly. Stay balanced after every contact.',
            variations: 'Four-person version with a wider triangle.',
          },
        ],
      },
      {
        name: 'Technical',
        drills: [
          {
            code: 'SERVE004',
            name: '5 Before 3 — Competitive Serving',
            duration: 15,
            objective: 'Build serve consistency under competitive pressure.\n\nTwo teams: serving team must score 5 in-play serves before the passing team scores 3 perfect passes. First to their number wins.',
            successCriteria: 'Servers maintain 80%+ in-play rate throughout the drill.',
            referencePoints: 'Same pre-serve routine every rep. Trust your mechanics under pressure.',
            variations: 'Require servers to hit a specific zone.',
          },
          {
            code: 'PASS006',
            name: 'Seam Passing',
            duration: 15,
            objective: 'Eliminate communication breakdowns on balls served into the seam between two passers.\n\nServer deliberately targets seam. Both passers call — first clear call takes it.',
            successCriteria: 'Zero double-touches or let-through balls across 15 reps.',
            referencePoints: 'Louder = winner. Back player calls off the front player early.',
            variations: 'Add a libero as a wild-card third passer.',
          },
          {
            code: 'HIT003',
            name: 'First Ball Side-Out (FBSO)',
            duration: 20,
            objective: 'Run the full pass–set–attack sequence off a live serve, tracking FBSO %.\n\nFull receiving team vs. live server. After reception, run complete attack system. Track: kill, error, dig.',
            successCriteria: 'Team achieves 55%+ kills on first ball over 20 reps.',
            referencePoints: 'Perfect pass = more options for the setter. Hitters must be in approach by setter\'s second step.',
            variations: 'Add a jump server. Restrict setter to back-sets only for 5 reps.',
          },
        ],
      },
      {
        name: 'Competitive',
        drills: [
          {
            code: 'GAME006',
            name: 'Pendulum Drill — Consecutive Positives',
            duration: 20,
            objective: 'Both teams earn points only through 3 consecutive positive contacts. Resets on any error.\n\nRegular play with the added rule: 3 positive contacts in a row = 1 point.',
            successCriteria: 'At least one team earns 5 pendulum points per set.',
            referencePoints: 'Forces quality over speed. Communicating "good" or "up" after each contact builds momentum.',
            variations: 'Raise the bar to 4 consecutive contacts.',
          },
          {
            code: 'GAME007',
            name: '11 to 11 Team Game',
            duration: 25,
            objective: 'Full competitive match to 11 points to close practice at maximum intensity.\n\nRace to 11, rally scoring, full rotation.',
            successCriteria: 'Both teams play at match intensity from point 1.',
            referencePoints: 'Coach observes and notes 3 moments to address at next practice.\nNo coaching during the game — simulate match independence.',
            variations: 'Loser runs a lap. Add a challenge rule (coach can challenge a call once).',
          },
        ],
      },
      {
        name: 'Cool-down',
        drills: [
          {
            code: 'CDN005',
            name: 'Full Stretch & Team Debrief',
            duration: 5,
            objective: 'Head-to-toe stretch. Coach reviews FBSO% and gives 3 positives + 1 focus before next session.',
            successCriteria: '',
            referencePoints: '',
            variations: '',
          },
        ],
      },
    ],
  },

  {
    id: 'plan-adv-002',
    name: 'Defence, Libero & Back Row Attack',
    duration: 120,
    level: 'Advanced',
    players: '12+',
    theme: 'Defensive Systems, Libero Patterns & Back Row Attack',
    phase: 'In-Season',
    outcomes: 'Dig efficiency above 55%; libero covers 70%+ of tip balls; pipe attack converted at 45%+.',
    sections: [
      {
        name: 'Warm-up',
        drills: [
          {
            code: 'WRM010',
            name: 'Individual Defence Warm-up',
            duration: 10,
            objective: 'Activate defensive muscles with a coach-driven warm-up: lateral shuffle → dive → roll → recover.\n\nIndividual players take turns receiving rapid-fire tosses from coach.',
            successCriteria: 'Every player completes a clean dive-and-roll sequence without hesitation.',
            referencePoints: 'Lead with hands, not the face. Roll on the shoulder.',
            variations: '',
          },
          {
            code: 'WRM011',
            name: 'Setter Star Footwork Patterns',
            duration: 5,
            objective: 'Setter runs a star pattern (centre → P4 → centre → P2 → centre → P1) to warm up directional footwork.',
            successCriteria: 'Setter reaches each point and returns within 3 seconds.',
            referencePoints: 'Right-foot plant points to target on each set. Stay on the balls of the feet.',
            variations: '',
          },
        ],
      },
      {
        name: 'Technical',
        drills: [
          {
            code: 'DIG004',
            name: 'Libero Defence Patterns',
            duration: 20,
            objective: 'Libero runs structured defensive coverage against varied attack combinations.\n\nCoach calls the attack option before delivery. Libero adjusts, digs primary zone, then transitions to tip coverage.',
            successCriteria: 'Libero in correct base position before setter contacts on 8/10 reps.',
            referencePoints: 'Read the setter\'s hips, not the hitter\'s approach.\nTip coverage is always the libero\'s responsibility.',
            variations: 'Remove the call — libero reads live. Track dig-to-set %.',
          },
          {
            code: 'DIG005',
            name: 'Rapid Fire Digging',
            duration: 10,
            objective: 'Build digging reaction time and endurance.\n\nCoach hits 10 balls rapidly to alternating zones. Digger contacts every ball and resets immediately. 3 sets of 10 with 30 s rest.',
            successCriteria: 'Digger contacts 8/10 balls per set.',
            referencePoints: 'Stay on your toes between contacts. Snap back to centre after each dig.',
            variations: 'Add a second digger to split coverage.',
          },
          {
            code: 'HIT004',
            name: 'Pipe Attack Drill',
            duration: 20,
            objective: 'Back-row hitter practises the pipe attack (Zone 6) off a live pass.\n\nPasser → setter → Zone 6 hitter approaches from behind 3m line and attacks cross or line.',
            successCriteria: 'Takeoff completely behind 3m line. Kill rate 40%+ over 20 reps.',
            referencePoints: 'Contact at the peak — don\'t wait for the ball to drop.\nApproach angle straight up the middle.',
            variations: 'Add a block. Combine with a live outside option.',
          },
        ],
      },
      {
        name: 'Competitive',
        drills: [
          {
            code: 'GAME008',
            name: '3 Before 5 — Serve & Defend',
            duration: 30,
            objective: 'Serving team scores 3 consecutive points defending; receiving team scores 5 side-outs. First to their number wins.\n\nFull teams. Server transitions to defence immediately after serving.',
            successCriteria: 'Servers in defensive position before setter contacts the pass on 70%+ of rallies.',
            referencePoints: 'Sprint off the service line — no watching your serve go over.',
            variations: 'Run with full rotation. Add a bonus point for a block.',
          },
          {
            code: 'GAME009',
            name: 'Full Competitive Scrimmage',
            duration: 20,
            objective: 'Full match-speed scrimmage to close the session.\n\nTrack: serve errors, FBSO %, defensive digs, and transition kills.',
            successCriteria: 'Zero serve errors in final 10 minutes.',
            referencePoints: 'Coaches only give data — no technique feedback during live play.',
            variations: '',
          },
        ],
      },
      {
        name: 'Cool-down',
        drills: [
          {
            code: 'CDN006',
            name: 'Stretch & Stats Review',
            duration: 5,
            objective: 'Cool-down stretch while coach shares key numbers from the scrimmage (serve %, FBSO %, digs).',
            successCriteria: '',
            referencePoints: '',
            variations: '',
          },
        ],
      },
    ],
  },
]

export default plans
