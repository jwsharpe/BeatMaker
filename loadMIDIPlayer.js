window.onload = function() {
  const instrumentsName = [
    "fretless_bass",
    "accordion",
    "acoustic_guitar_nylon",
    "rock_organ"
  ];

  MIDI.loadPlugin({
    soundfontUrl: "fatboy/",
    instruments: instrumentsName,
    onsuccess: function() {
      MIDI.programChange(0, MIDI.GM.byName[instrumentsName[0]].number);
      MIDI.programChange(1, MIDI.GM.byName[instrumentsName[1]].number);
      MIDI.programChange(2, MIDI.GM.byName[instrumentsName[2]].number);
      MIDI.programChange(3, MIDI.GM.byName[instrumentsName[3]].number);
    }
  });
};
