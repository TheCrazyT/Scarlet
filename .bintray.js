{
    "package": {
        "name": "Scarlet",
        "repo": "Scarlet",
        "subject": "thecrazyt",
        "vcs_url": "https://travis-ci.org/TheCrazyT/Scarlet",
        "licenses": ["MIT"]
    },

    "version": {
        "name": "0.9"
    },

    "files":
        [
            {
                "includePattern": "/home/travis/build/TheCrazyT/Scarlet/ScarletTestApp/bin/Release/(.*)", "uploadPattern": "0.9/$1",
                "matrixParams": {
                    "override": 1 
                }
            }
        ],
    "publish": true
}
