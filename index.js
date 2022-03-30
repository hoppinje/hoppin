name: Test
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@master
      - name: Self test
        id: selftest

        # Put your action repo here
        uses: proyecto-chaucha/chaucha-gha-wallet-generator@master
        with:
          value: "test"
