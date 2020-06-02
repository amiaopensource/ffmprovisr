# [ffmprovisr](http://amiaopensource.github.io/ffmprovisr)

Repository of useful FFmpeg command lines for archivists!

* [What is this?](#what-is-this)
* [How do I see it?](#how-do-i-see-it)
* [How do I contribute?](#how-do-i-contribute)
  * [Guidelines for contributing](#guidelines-for-contributing)
* [Code of conduct](#code-of-conduct)
* [Maintainers](#maintainers)
* [Contributors](#contributors)
* [AVHack Team](#avhack-team)
* [Sister projects](#sister-projects)
* [Articles and mentions](#articles-and-mentions)
* [License](#license)

## What is this?

### Project Objective

To facilitate better understanding of FFmpeg through collaborative sharing of useful scripts and detailed flag-level description of how each script works, so archivists can copy-paste and produce their own scripts, but also understand how and why they work.

## How do I see it?

The code is found in the gh-pages branch (the default primary branch). Readme is right here. You can see the site live on [GitHub pages](http://amiaopensource.github.io/ffmprovisr).

You can also install the latest [release](https://github.com/amiaopensource/ffmprovisr/releases) on your computer with the two commands:
```
brew tap amiaopensource/amiaos
brew install ffmprovisr
```
and then call it locally with the command:
```
ffmprovisr
```
This works currently under macOS, Linux and the Linux apps on Windows (Ubuntu and Debian tested). On classic Windows you can install the last [release](https://github.com/amiaopensource/ffmprovisr/releases) manually and the open `index.html` in a browser.

### Parseable list of the commands

A list of all recipes in an easily parseable [ASCII text](recipes.txt) format is provided as well. It contains for each recipe its title and command in the following format:

```
# title of recipe 1
ffmpeg command 1
# title of recipe 2
ffmpeg command 2

...

# title of recipe n-1
ffmpeg command n-1
# title of recipe n
ffmpeg command n
```

The used [one-liner](scripts/get_recipe_list) is in the `scripts` folder.

## How do I contribute?

You are welcome to edit the codebase yourself, or just supply the information and ask it to be added to the site.

### Edit codebase

To contribute to this project directly (and more quickly), clone this repository and create a new branch (`git checkout -b your-branch-name`) and add or modify a new block in `index.html`. Then [submit a pull request](https://github.com/amiaopensource/ffmprovisr/pulls) and the maintainers will review and integrate your code. There is a commented-out sample block available at the bottom of `index.html` that can be a guideline for your command.

#### Guidelines for contributing

* Recipes should ideally do just one thing or solve one problem, to keep things as user-friendly as possible and to avoid unintended side-effects
* Add the recipe to the [`.txt` file](./recipes.txt)
* Explanations and examples for recipes should be as generic as possible, to allow users to alter the command for their own use-case.
  * This may involve the use of `VARIABLE_NAMES`
  * Example: [Fade video and audio streams](https://amiaopensource.github.io/ffmprovisr/#fade_streams)
* Some recipes may benefit from including a GIF that shows the output
  * Example: [Plays a graphical output showing decibel levels of an input file](https://amiaopensource.github.io/ffmprovisr/#astats)
* Some recipes require an explanatory section which may not fit gracefully into the recipe itself
  * Example: [Rewrap a file](https://amiaopensource.github.io/ffmprovisr/#basic-rewrap)
* Recipes involving `-filter_complex` can be some of the most verbose and difficult to understand, so breaking these down as much as possible into their relevant sections is ideal
  * Example: [Generate two access MP3s from input](https://amiaopensource.github.io/ffmprovisr/#append_mp3)
* Some recipes may refer to a specifc standard or vocabulary, and it's useful to link to these so that the user can scale the recipe to their use case
  * Example: [Generate Broadcast WAV](https://amiaopensource.github.io/ffmprovisr/#bwf)

### Make a request

If you are having trouble with coding it yourself or with GitHub, feel free to [submit an issue](https://github.com/amiaopensource/ffmprovisr/issues) with the kind of command you would like to see added to the site.

### General help

If you want to help but don't have a new script to add, you can help us by testing out the scripts available, by refining or clarifying the documentation, or [creating an issue](https://github.com/amiaopensource/ffmprovisr/issues) for anything that sounds confusing and requires clarification.

## Code of Conduct

You can read our contributor code of conduct [here](https://github.com/amiaopensource/ffmprovisr/blob/gh-pages/code_of_conduct.md).

## Maintainers

[Ashley Blewer](https://github.com/ablwr), [Katherine Frances Nagels](https://github.com/kfrn), [Kieran O'Leary](https://github.com/kieranjol) and [Andrew Weaver](https://github.com/privatezero)

## Contributors
* Gathered using [octohatrack](https://github.com/LABHR/octohatrack)

*Code Contributors*:  
ablwr (Ashley)  
alavigne12 (A. Lavigne)  
Anushka-codergirl (Anushka Raj)  
bastibeckr (Basti Becker)  
bturkus  
dericed (Dave Rice)  
digitensions (Joanna White)  
edsu (Ed Summers)  
jamessam (Jim Sam)  
jfarbowitz (Jonathan Farbowitz)  
kfrn (Katherine Frances Nagels)  
kgrons (Kathryn Gronsbell)  
kieranjol (Kieran O'Leary)  
llogan (Lou Logan)  
macasaurusrex (Maura)  
mgiraldo (Mauricio Giraldo)  
pjotrek-b (Peter B.)  
privatezero (Andrew Weaver)  
retokromer (Reto Kromer)  
rfraimow  

All Contributors:  
ablwr (Ashley)  
alavigne12 (A. Lavigne)  
Anushka-codergirl (Anushka Raj)  
audiovisualopen  
bastibeckr (Basti Becker)  
brainwane (Sumana Harihareswara)  
bturkus  
dericed (Dave Rice)  
digitensions (Joanna White)  
drodz11 (Dave Rodriguez)  
edsu (Ed Summers)  
EG-tech (Ethan Gates)  
federicomenaquintero (Federico Mena Quintero)  
Fizz24  
GregH18  
jamessam (Jim Sam)  
jfarbowitz (Jonathan Farbowitz)  
JonnyTech  
jronallo (Jason Ronallo)  
kellyhaydon (metacynic)  
kfrn (Katherine Frances Nagels)  
kgrons (Kathryn Gronsbell)  
kieranjol (Kieran O'Leary)  
llogan (Lou Logan)  
macasaurusrex (Maura)  
mercuryswitch  
mgiraldo (Mauricio Giraldo)  
mulvya  
nkrabben (Nick Krabbenhoeft)  
pjotrek-b (Peter B.)  
privatezero (Andrew Weaver)  
retokromer (Reto Kromer)  
rfraimow  
richardpl (Paul B Mahol)  
ross-spencer (Ross Spencer)  
taschenbach (Tommy Aschenbach)  
todrobbins (Tod Robbins)  

Repo: amiaopensource/ffmprovisr  
GitHub Contributors: 20  
All Contributors: 37  
Last updated: 2019-12-11

## AVHack Team

[Association of Moving Image Archivists & Digital Library Federation Hack Day 2015](http://wiki.curatecamp.org/index.php/Association_of_Moving_Image_Archivists_%26_Digital_Library_Federation_Hack_Day_2015)

[Ashley Blewer](https://github.com/ablwr), [Eddy Colloton](https://github.com/eddycolloton), Rebecca Dillmeier, [Jonathan Farbowitz](https://github.com/jfarbowitz), [Rebecca Fraimow](https://github.com/rfraimow), Samuel Gutterman, [Kelly Haydon](https://github.com/kellyhaydon), [Reto Kromer](https://github.com/retokromer), Nicole Martin, [Katherine Frances Nagels](https://github.com/kfrn), [Kieran O'Leary](https://github.com/kieranjol), Catriona Schlosser, [Ben Turkus](https://github.com/bturkus)

## Sister projects

[The Cable Bible](https://amiaopensource.github.io/cable-bible/): A Guide to Cables and Connectors Used for Audiovisual Tech  
[QEMU QED](https://eaasi.gitlab.io/qemu-qed): instructions for using QEMU (Quick EMUlator), a command line application for computer emulation and virtualization  
[Script Ahoy](http://dd388.github.io/crals/): Community Resource for Archivists and Librarians Scripting  
[sourcecaster](https://datapraxis.github.io/sourcecaster/): helps you use the command line to work through common challenges that come up when working with digital primary sources.

## Articles and mentions

* 2019-09: **Andrew Weaver & Ashley Blewer**, [Sustainability through community: ffmprovisr and the Case for Collaborative Knowledge Transfer](https://ipres2019.org/static/pdf/iPres2019_paper_97.pdf) (PDF), iPRES 2019
  - Andrew Weaver [won](https://twitter.com/iPRES2019/status/1177136202144768000) iPres' Best First Time Contribution Award for his work on this paper :)
* 2018-11: ffmprovisr is mentioned in [a job advert](http://web.library.emory.edu/documents/pa_staff_Audiovisual%20Conservator_Nov2018.pdf)!
* 2017-10: **Ashley Blewer & Katherine Nagels**, [ffmprovisr gets a redesign](https://bits.ashleyblewer.com/blog/2017/10/31/ffmprovisr-redesign/)
* 2015-11: **AMIA & DLF Hack Day 2015**, [ffmprovsr](https://wiki.curatecamp.org/index.php/Association_of_Moving_Image_Archivists_&_Digital_Library_Federation_Hack_Day_2015#ffmprovsr) - the genesis of ffmprovisr (then spelled without the 'i')

## License

<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/80x15.png"></a><br>
This <span xmlns:dct="http://purl.org/dc/terms/" href="http://purl.org/dc/dcmitype/InteractiveResource" rel="dct:type">work</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="http://amiaopensource.github.io/ffmprovisr/" property="cc:attributionName" rel="cc:attributionURL">ffmprovisr</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.<br>
Based on a work at <a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/amiaopensource/ffmprovisr" rel="dct:source">https://github.com/amiaopensource/ffmprovisr</a>.
