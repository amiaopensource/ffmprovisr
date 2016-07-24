#!/usr/bin/env bash
  SCRIPT=$(basename "${0}")
 VERSION='2016-07-24'
  AUTHOR='ffmprovisr'
     RED='\033[1;31m'
   BLUE='\033[1;34m'
      NC='\033[0m'

_output_prompt() {
    cat <<END_OF_MSG
Usage: ${SCRIPT} [-h | <av_file> <md5_file>]
END_OF_MSG
}

_output_help() {
    cat <<END_OF_MSG
Syntax:
  ${SCRIPT}
    Prompts a short help message.
  ${SCRIPT} -h
    This help.
  ${SCRIPT} <av_file> <md5_file>
    Pass to the script the audio-visual file and the corresponding MD5
    file to check.
Dependency:
  ffmpeg
About:
  Version: ${VERSION}
  Website: https://github.com/amiaopensource/ffmprovisr/blob/gh-pages/check_framemd5.sh
END_OF_MSG
}

if [[ $OSTYPE == "cygwin" ]] || [ ! $(which diff) ] ; then
    echo -e "${RED}ERROR:${NC} diff is not installed by default. Please install diffutils from Cygwin."
    exit 1
fi

if [ "$#" -eq 0 ]; then
    _output_prompt
    exit 0
elif [ "$#" -eq 1 ]; then
    if [ "$1" == '-h' ]; then
        _output_help
        exit 0
    else
        echo -e "${RED}ERROR:${NC} '$1' is an invalid argument."
        _output_prompt
        exit 1
    fi
elif [ "$#" -eq 2 ]; then
    if ! [ -f "$1" ]; then
        echo -e "${RED}ERROR:${NC} There is no file '$(basename $1)'."
        _output_prompt
        exit 1
    elif ! [ -f "$2" ]; then
        echo -e "${RED}ERROR:${NC} There is no file '$(basename $2)'."
        _output_prompt
        exit 1
    else
        unset md5_tmp
        if [[ $OSTYPE == "cygwin" ]]; then
            md5_tmp=""$USERPROFILE/$(basename $2).tmp""
        else 
            md5_tmp="$HOME/$(basename $2).tmp"
        fi
        echo "Please wait..."
        $(ffmpeg -y -i $1 -loglevel 0 -f framemd5 -an $md5_tmp)
        old_file=$(grep -v '^#' $2)
        tmp_file=$(grep -v '^#' $md5_tmp)
        if [ "$old_file" = "$tmp_file" ]; then
            echo -e "${BLUE}OK${NC} '$(basename $1)' matches '$(basename $2)'."
            exit 0
        else
            echo -e "${RED}ERROR:${NC} The following differences were detected between '$(basename $1)' and '$(basename $2)':"
            diff "$2" "$md5_tmp"
            exit 1
        fi
        rm "$md5_tmp"
    fi
else
    echo -e "${RED}ERROR:${NC} Too many arguments."
    _output_prompt
    exit 1
fi
