#!/usr/bin/env bash
  SCRIPT=$(basename "${0}")
 VERSION="2018-02-10"
  AUTHOR="ffmprovisr"
     RED="\033[1;31m"
    BLUE="\033[1;34m"
      NC="\033[0m"

if [[ "${OSTYPE}" = "cygwin" ]] || [[ ! "$(which diff)" ]]; then
    echo -e "${RED}Error: 'diff' is not installed by default. Please install 'diffutils' from Cygwin.${NC}"
    exit 1
fi

_output_prompt(){
    cat <<EOF
Usage: ${SCRIPT} -i <av_file> -m <md5_file> | -h
EOF
    exit 1
}

_output_help(){
    cat <<EOF
Syntax:
  ${SCRIPT} -i <av_file> -m <md5_file>
    Pass to the script the audio-visual file and the corresponding MD5
    file to check.
  ${SCRIPT} -h
    This help.
Dependency:
  ffmpeg
About:
  Version: ${VERSION}
  Website: https://github.com/amiaopensource/ffmprovisr/blob/gh-pages/scripts/check_video_framemd5.sh
EOF
    exit 0
}

unset input_file
unset input_hash

while getopts ":i:m:h" opt; do
    case "${opt}" in
        i) input_file=${OPTARG} ;;
        m) input_hash=${OPTARG} ;;
        h) _output_help ;;
        :) echo -e "${RED}Error: option -${OPTARG} requires an argument${NC}" ; _output_prompt ;;
        *) echo -e "${RED}Error: bad option -${OPTARG}${NC}" ; _output_prompt ;;
    esac
done

[[ -z "${#}" || ! ${input_file} || ! ${input_hash} ]] && _output_prompt
echo -e "${BLUE}Please wait...${NC}"
unset md5_tmp
if [[ "${OSTYPE}" = "cygwin" ]]; then
    md5_tmp="${USERPROFILE}/$(basename "${input_hash}").tmp"
else
    md5_tmp="${HOME}/$(basename "${input_hash}").tmp"
fi
ffmpeg -i "${input_file}" -loglevel 0 -f framemd5 -an "${md5_tmp}"
[[ ! -f "${md5_tmp}" ]] && { echo -e "${RED}Error: '${input_file}' is not a valid audio-visual file.${NC}" ; _output_prompt ; }
unset old_file
unset tmp_file
old_file=$(grep -v '^#' "${input_hash}")
tmp_file=$(grep -v '^#' "${md5_tmp}")
if [[ "${old_file}" = "${tmp_file}" ]]; then
    echo -e "${BLUE}'$(basename "${input_file}")' matches '$(basename "${input_hash}")'${NC}"
else
    echo -e "${RED}The following differences were detected between '$(basename "${input_file}")' and '$(basename "${input_hash}")':${NC}"
    diff "${input_hash}" "${md5_tmp}"
fi
rm "${md5_tmp}"
