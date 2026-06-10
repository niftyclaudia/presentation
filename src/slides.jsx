import {
  Item, Rule, BrandLogo, Photo, MessageScene, SalaryTable,
} from './components.jsx'
import GridField from './GridField.jsx'

/* ============================================================
   SLIDE DEFINITIONS
   meta: { dark, center, section, chapter } drives chrome + theme.
   Dark slides are deliberate act-breaks (title, dividers, close).
   No section-number eyebrows; the running header carries context.
   No em-dashes anywhere. Separators rationed.

   Structure (per updated outline):
     Open      : Title, Who we are
     Part 1    : Paying you (div) / Trap / CFO / High expectations
     Part 2    : Focus your fire (div) / Risks / Smart negotiation / Salary
     Part 3    : 90-day reality (div) / Staying ahead / Capstone
     Close     : Questions
   ============================================================ */

export const SLIDES = [
  /* 01 — TITLE ------------------------------------------------ */
  {
    id: 'title',
    dark: true,
    center: true,
    section: 'Open',
    Content: () => (
      <>
        <GridField />
        <Item i={0}><BrandLogo white height="clamp(64px, 8vw, 104px)" /></Item>
        <Item i={1} as="h1" className="displg" style={{ marginTop: 32 }}>
          The Reality Check.
        </Item>
        <Item i={2} className="sub" style={{ maxWidth: '50ch', marginTop: 22 }}>
          What we wish someone had told us before graduation.
        </Item>
      </>
    ),
  },

  /* 02 — WHO WE ARE (split: photo + text) --------------------- */
  {
    id: 'who',
    section: 'Open',
    Content: () => (
      <div className="cols">
        <Photo src="/assets/team.jpg" ratio="16 / 9"
          alt="Claudia, Nani and Vanes" caption="Las chicas, G3" />
        <div className="col">
          <Item i={2} as="h2" className="hlg">
            Claudia, Nani &amp; Vanes.
          </Item>
          <Item i={3}><Rule style={{ marginTop: 28 }} /></Item>
          <Item i={4} className="body lead">
            Three G3 grads from laschicas.ai, here to give it to you straight.
            No theory. Just what the job actually felt like.
          </Item>
        </div>
      </div>
    ),
  },

  /* 03 — DIVIDER: THE JOB (dark) ------------------------------ */
  {
    id: 'div-job',
    dark: true,
    section: 'The job',
    chapter: '1',
    Content: () => (
      <>
        <Item i={0} as="h2" className="disp">
          Why they're<br />actually paying you.
        </Item>
        <Item i={1} className="body lead" style={{ marginTop: 32 }}>
          Demo projects are not production-ready apps.
        </Item>
      </>
    ),
  },

  /* 04 — THE TRAP --------------------------------------------- */
  {
    id: 'trap',
    section: 'The job',
    Content: () => (
      <>
        <Item i={0} as="h2" className="hlg">
          Don't stop at the demo.
        </Item>
        <div className="rows">
          <Item i={1} className="row"><span className="mk">01</span><span className="tx">You can build a demo in 4 hours. That doesn't mean you stop there.</span></Item>
          <Item i={2} className="row"><span className="mk">02</span><span className="tx">A demo is not a production-ready app.</span></Item>
          <Item i={3} className="row"><span className="mk">03</span><span className="tx">The job asks you to build at a completely different level.</span></Item>
        </div>
      </>
    ),
  },

  /* 05 — CFO / BOSS SCENARIO (message scene + text) ----------- */
  {
    id: 'cfo',
    section: 'The job',
    Content: () => (
      <div className="cols wide-text">
        <MessageScene />
        <div className="col">
          <Item i={0} as="h2" className="h">
            And what's your take?
          </Item>
          <Item i={2} className="body">
            The day you're the AI hire, leadership expects you to track every launch
            and have an opinion ready. Knowing the landscape becomes part of the job,
            not a bonus.
          </Item>
        </div>
      </div>
    ),
  },

  /* 06 — HIGH EXPECTATIONS (dark) ----------------------------- */
  {
    id: 'avengers',
    dark: true,
    section: 'The job',
    Content: () => (
      <>
        <Item i={0} as="h2" className="hlg">
          They expect the Avengers.
        </Item>
        <Item i={1}><Rule style={{ marginTop: 28 }} /></Item>
        <Item i={2} className="body lead">
          Complex projects delivered in a few days, not a few months.
          That's the bar in their head the day you walk in.
        </Item>
      </>
    ),
  },

  /* 07 — DIVIDER: OFFERS / FOCUS YOUR FIRE (dark) ------------- */
  {
    id: 'div-offers',
    dark: true,
    section: 'Offers',
    chapter: '2',
    Content: () => (
      <>
        <Item i={0} as="h2" className="disp">
          Focus your fire.
        </Item>
        <Item i={1} className="body lead" style={{ marginTop: 32 }}>
          Stop chasing six-plus offers at once.
        </Item>
        <Item i={2} className="body" style={{ marginTop: 12 }}>
          Learn from the ones before you. Cohorts 2, 3 and 4 all found this out the hard way.
        </Item>
      </>
    ),
  },

  /* 08 — RISKS OF HOARDING ------------------------------------ */
  {
    id: 'risks',
    section: 'Offers',
    Content: () => (
      <>
        <Item i={0} as="h2" className="hlg">
          Waiting has a real cost.
        </Item>
        <div className="rows">
          <Item i={1} className="row"><span className="mk">01</span><span className="tx">Collecting six offers before you commit is a risk in itself.</span></Item>
          <Item i={2} className="row"><span className="mk">02</span><span className="tx">Another cohort member can say yes to your top company first.</span></Item>
          <Item i={3} className="row"><span className="mk">03</span><span className="tx">Companies pull offers off the table when you wait too long.</span></Item>
        </div>
      </>
    ),
  },

  /* 09 — SMART NEGOTIATION ------------------------------------ */
  {
    id: 'negotiate',
    section: 'Offers',
    Content: () => (
      <>
        <Item i={0} as="h2" className="hlg">
          Every dollar raises the bar.
        </Item>
        <Item i={1}><Rule style={{ marginTop: 28 }} /></Item>
        <Item i={2} className="body lead">
          The people who earn above base bring real experience and judgment, not just
          good prompts. Every dollar you ask for raises what they expect from you.
          So ask for the money, then ask for help.
        </Item>
      </>
    ),
  },

  /* 10 — SALARY ----------------------------------------------- */
  {
    id: 'salary',
    section: 'Offers',
    Content: () => (
      <>
        <Item i={0} as="h2" className="h" style={{ marginBottom: 6 }}>
          What the market actually pays.
        </Item>
        <SalaryTable />
        <Item i={3} className="cap">
          <b>More pay, more pressure.</b> Every extra dollar raises what they expect
          you to deliver. Set expectations you can actually sustain.
          <span className="src"> Source: Fonzi talent marketplace.</span>
        </Item>
      </>
    ),
  },

  /* 11 — DIVIDER: STAYING IN (dark) --------------------------- */
  {
    id: 'div-stay',
    dark: true,
    section: 'Staying in the job',
    chapter: '3',
    Content: () => (
      <>
        <Item i={0} as="h2" className="disp">
          The 90-day reality<br />and negotiation.
        </Item>
        <Item i={1} className="body lead" style={{ marginTop: 32 }}>
          The return policy is real, and it goes well beyond 90 days.
        </Item>
      </>
    ),
  },

  /* 12 — STAYING AHEAD (dark) --------------------------------- */
  {
    id: 'ahead',
    dark: true,
    section: 'Staying in the job',
    Content: () => (
      <>
        <Item i={0} as="h2" className="hlg">
          Job security is staying ahead.
        </Item>
        <div className="rows">
          <Item i={1} className="row"><span className="mk">01</span><span className="tx">The 90-day return policy is real, and it doesn't end at 90 days.</span></Item>
          <Item i={2} className="row"><span className="mk">02</span><span className="tx">Show up to AI events. Keep learning. Keep testing new tools.</span></Item>
          <Item i={3} className="row"><span className="mk">03</span><span className="tx">Build a network, and make it one that's actually useful.</span></Item>
        </div>
      </>
    ),
  },

  /* 13 — CAPSTONE (text + stage photo) ------------------------ */
  {
    id: 'capstone',
    section: 'Staying in the job',
    Content: () => (
      <div className="cols">
        <div className="col">
          <Item i={0} as="h2" className="h">
            Make it your wow factor.
          </Item>
          <Item i={1} className="body">
            Once you lock the job, shift everything to your capstone. Make it
            production-worthy. Make it make money. Show exactly what you can build
            in three weeks. That proof outlasts the interview.
          </Item>
        </div>
        <Photo src="/assets/stage.jpg" ratio="16 / 9"
          alt="Capstone demo on stage" caption="Capstone demo day, Build a D1 Athlete" i={1} />
      </div>
    ),
  },

  /* 14 — CLOSE (dark) ----------------------------------------- */
  {
    id: 'close',
    dark: true,
    center: true,
    section: 'Close',
    Content: () => (
      <>
        <Item i={0} className="kicker">Questions?</Item>
        <Item i={1} as="h2" className="disp">
          Now go survive the job.
        </Item>
        <Item i={2} className="stack" style={{ marginTop: 34 }}>
          <span className="names">Claudia, Nani and Vanes</span>
          <BrandLogo white height="clamp(40px, 5vw, 60px)" />
        </Item>
      </>
    ),
  },
]
