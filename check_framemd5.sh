#!/usr/bin/env bash
  SCRIPT=$(basename "${0}")
 VERSION='2016-10-08'
  AUTHOR='ffmprovisr'
     RED='\033[1;31m'
    BLUE='\033[1;34m'
      NC='\033[0m'

if [[ $OSTYPE = "cygwin" ]] || [ ! $(which diff) ]; then
    echo -e "${RED}ERROR:${NC} 'diff' is not installed by default. Please install 'diffutils' from Cygwin."
    exit 1
fi

_output_prompt(){
    cat <<EOF
Usage: ${SCRIPT} [-h | -i <av_file> -m <md5_file>]
EOF
    exit 1
}

_output_help(){
    cat <<EOF
Syntax:
  ${SCRIPT}
    Prompts a short help message.
  ${SCRIPT} -h
    This help.
  ${SCRIPT} -i <av_file> -m <md5_file>
    Pass to the script the audio-visual file and the corresponding MD5
    file to check.
Dependency:
  ffmpeg
About:
  Version: ${VERSION}
  Website: https://github.com/amiaopensource/ffmprovisr/blob/gh-pages/check_framemd5.sh
EOF
    exit 0
}

while getopts ":hi:m:" opt; do
  case "${opt}" in
    h) _output_help ;;
    i) input_file=$OPTARG ;;
    m) input_hash=$OPTARG ;;
    *) echo -e "${RED}Error:${NC }bad option -${OPTARG}" ; _output_prompt ;;
    :) echo -e "${RED}Error:${NC} option -${OPTARG} requires an argument" ; _output_prompt ;;
  esac
done

[ -z "${@}" ] && _output_prompt
echo -e "${BLUE}Please wait...${NC}"
unset md5_tmp
if [[ $OSTYPE = "cygwin" ]]; then
  md5_tmp=""${USERPROFILE}/$(basename ${input_hash}).tmp""
else
  md5_tmp="${HOME}/$(basename ${input_hash}).tmp"
fi
$(ffmpeg -i ${input_file} -loglevel 0 -f framemd5 -an ${md5_tmp})
[[ ! -f ${md5_tmp} ]] && _output_prompt
old_file=$(grep -v '^#' ${input_hash})
tmp_file=$(grep -v '^#' ${md5_tmp})
if [[ "${old_file}" = "${tmp_file}" ]]; then
  echo -e "${BLUE}OK${NC} '$(basename ${input_file})' matches '$(basename ${input_hash})'."
  rm "${md5_tmp}"
  exit 0
else
  echo -e "${RED}ERROR:${NC} The following differences were detected between '$(basename ${input_file})' and '$(basename ${input_hash})':"
  diff "${input_hash}" "${md5_tmp}"
  rm "${md5_tmp}"
  exit 1
fi
