# Read Me

## Setup
* This site uses Jekyll so you'll need to isntall that. Info here: <https://jekyllrb.com/>
* clone the repo
* cd into the site directory
* run ```npm install```
* run ```bundle install```
* run ```gulp```

## Know Issues
* sometime Gulp will quit and leave the Jekyll server running
	* You will see errors like:
		* WARN  TCPServer Error: Address already in use - bind(2)
		* Jekyll: jekyll 3.2.1 | Error:  Address already in use - bind(2)
	* You can fix by doing:
		* run ``` pkill -f jekyll ```
		* then re-run ``` gulp ```