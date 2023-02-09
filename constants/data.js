const userData = {
  githubUsername: 'tylersb',
  name: 'Tyler Benbrook',
  designation: 'Full-Stack Engineer',
  avatarUrl: '/avatar.png',
  email: 'tylerbenbrook@gmail.com',
  address: 'CA, USA',
  projects: [
    {
      title: 'Food Delivery App',
      link: 'https://nimble-chimera-2ff671.netlify.app/',
      imgUrl: '/axiosfood.jpg'
    },
    {
      title: 'Workout Tracker',
      link: 'https://t-workout-tracker.herokuapp.com/',
      imgUrl: '/workouttracker.png'
    },
    {
      title: 'Portfolio',
      link: 'https://www.tylerbenbrook.com',
      imgUrl: '/portfolio.png'
    }
  ],
  about: {
    title: 'TBD',
    description: [
      `I'm passionate about technology in general and continually find new interesting topics to delve into. Here's a few of the areas that I've researched or worked on as personal projects.`,
      `I've had a lot of fun self-hosting various services in my homelab such as ELK (Elasticsearch, Logstash, Kibana), Zabbix, Grafana, Adguard Home, Unbound, Suricata, Zenarmor, Webmin, Crowdsec, Netdata, OSQuery, Wireguard VPN and many others. Sometimes I've installed the services within a VM on my hypervisor (Proxmox) and other times I've spun them up within their own Docker containers or grouped similar services together using Docker Compose.`,
      `I have a Raspberry Pi 4 that I previously used to manage my own DNS/adblocking, but after setting up a custom router with OpnSense on an old laptop it made more sense to move those services to the router and I haven't come up with a new use for the pi yet. I've also experimented with Ansible, although I'm a bit out of practice now.`,
      `I've had a lot of fun trying out different Linux distros: Kali Linux, Kodachi, Parrot Security, Tails, Qubes OS (definitely one of the most interesting, but also probably the most complicated that I tried out), Debian, Ubuntu, DietPi (debian based lightweight raspberry pi OS), OpnSense (open source version of pfSense, primarily based on HardenedBSD/FreeBSD)`,
      `I find CyberSecurity in general pretty fascinating, almost everything in the MITRE ATT&CK matrix is interesting to read up on and I could probably get lost for weeks reading through the techniques and the linked examples. Google Project Zero blogposts about discovering zero day iOS exploits (frequently NSO group exploits) or reading some of the posts by various security orgs about APT (Advanced Persistent Threat) groups and their infiltrations (SolarWinds situation especially fascinating).`
    ],
    currentProject: 'Slack Clone',
    currentProjectUrl: 'TBD'
  },
  experience: [
    {
      title: 'Talent Acquisition / Avature System Administrator',
      company: 'Blizzard Entertainment',
      year: '2017-2019',
      companyLink: 'https://www.blizzard.com',
      desc: 'My role at Blizzard was a hybrid role where around half of my time was spent focusing on the recruiting side of my job. The other half focused on systems administration for our ATS - Avature which also included an end-to-end refactor of our data structure to eliminate instances of data duplication and improve our overall reporting capabilities.'
    }
  ],
  resumeUrl:
    'https://docs.google.com/document/d/112eHQTgdqv6xGe0MyNCPCF9Ntr-822FZ5-dsA_Gk3MI/edit?usp=sharing',
  socialLinks: {
    linkedin: 'https://linkedin.com/in/tyler-benbrook',
    github: 'https://github.com/tylersb'
  }
}

export default userData
