export const threats = [
  {
    id: '1',
    name: 'Macro viruses',
    definition: 'These viruses infect applications such as Microsoft ' +
      'Word or Excel. Macro viruses attach to an application’s initialization ' +
      'sequence. When the application is opened, the virus executes instructions ' +
      'before transferring control to the application. The virus replicates itself and attaches to other code in the computer system',
    icon: ''
  },
  {
    'id': '2',
    'name': 'File infectors',
    'definition': ' File infector viruses usually attach themselves to executable code, such as .exe files. The virus is installed when the code is loaded. Another version of a file infector associates itself with a file by creating a virus file with the same name, but an .exe extension. Therefore, when the file is opened, the virus code will execute',
    'icon': ''
  },
  {
    'id': '3',
    'name': 'System or boot-record infectors',
    'definition': 'A boot-record virus attaches to the master boot record on hard disks. When the system is started, it will look at the boot sector and load the virus into memory, where it can propagate to other disks and computers.',
    'icon': ''
  },
  {
    'id': '4',
    'name': 'Polymorphic viruses',
    'definition': 'These viruses conceal themselves through varying cycles of encryption and decryption. The encrypted virus and an associated mutation engine are initially decrypted by a decryption program. The virus proceeds to infect an area of code. The mutation engine then develops a new decryption routine and the virus encrypts the mutation engine and a copy of the virus with an algorithm corresponding to the new decryption routine. The encrypted package of mutation engine and virus is attached to new code, and the process repeats. Such viruses are difficult to detect but have a high level of entropy because of the many modifications of their source code. Anti-virus software or free tools like Process Hacker can use this feature to detect them.',
    'icon': ''
  },
  {
    'id': '5',
    'name': 'Stealth viruses',
    'definition': 'Stealth viruses take over system functions to conceal themselves. They do this by compromising malware detection software so that the software will report an infected area as being uninfected. These viruses conceal any increase in the size of an infected file or changes to the file’s date and time of last modification.',
    'icon': ''
  },
  {
    'id': '6',
    'name': 'Trojans',
    'definition': 'A Trojan or a Trojan horse is a program that hides in a useful program and usually has a malicious function. A major difference between viruses and Trojans is that Trojans do not self-replicate. In addition to launching attacks on a system, a Trojan can establish a back door that can be exploited by attackers. For example, a Trojan can be programmed to open a high-numbered port so the hacker can use it to listen and then perform an attack.',
    'icon': ''
  },
  {
    'id': '7',
    'name': 'Logic bombs',
    'definition': 'A logic bomb is a type of malicious software that is appended to an application and is triggered by a specific occurrence, such as a logical condition or a specific date and time',
    'icon': ''
  },
  {
    'id': '8',
    'name': 'Worms',
    'definition': 'Worms differ from viruses in that they do not attach to a host file, but are self-contained programs that propagate across networks and computers. Worms are commonly spread through email attachments; opening the attachment activates the worm program. A typical worm exploit involves the worm sending a copy of itself to every contact in an infected computer’s email address In addition to conducting malicious activities, a worm spreading across the internet and overloading email servers can result in denial-of-service attacks against nodes on the network',
    'icon': ''
  },
  {
    'id': '9',
    'name': 'Droppers',
    'definition': 'A dropper is a program used to install viruses on computers. In many instances, the dropper is not infected with malicious code and, therefore might not be detected by virus-scanning software. A dropper can also connect to the internet and download updates to virus software that is resident on a compromised system.',
    'icon': ''
  },
  {
    'id': '10',
    'name': 'Ransomware',
    'definition': 'Ransomware is a type of malware that blocks access to the victim’s data and threatens to publish or delete it unless a ransom is paid. While some simple computer ransomware can lock the system in a way that is not difficult for a knowledgeable person to reverse, more advanced malware uses a technique called cryptoviral extortion, which encrypts the victim’s files in a way that makes them nearly impossible to recover without the decryption key.',
    'icon': ''
  }
];
