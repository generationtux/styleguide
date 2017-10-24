# Generation Tux Style Guide

<http://gentuxdesign.com>

## Setup

* This site uses Jekyll so you'll need to install that. Info here: <https://jekyllrb.com/>
* clone the repo
* cd into the site directory
* run `npm install`
* run `bundle install`
* run `npm install -g gulp` (if you don't have gulp installed globally)
* run `bundle exec gulp`

## Know Issues

* sometimes Gulp will quit and leave the Jekyll server running
	* You will see errors like:
		* WARN  TCPServer Error: Address already in use - bind(2)
		* Jekyll: jekyll 3.2.1 | Error:  Address already in use - bind(2)
	* You can fix with these steps:
		* run `pkill -f jekyll`
		* then re-run `bundle exec gulp`

## Updating NPM
* log into NPM from terminal with `npm login`
* use gentux creds
* run `npm publish`


# Todo

- [ ] update hosting