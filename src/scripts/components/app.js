'use strict';

var React = require('react/addons');

var Icon = require('../../../icons');

// Export React so the devtools can find it
(window !== window.top ? window.top : window).React = React;

// CSS
require('../../styles/normalize.css');
require('../../styles/main.css');


var App = React.createClass({
  render: function() {
    return (
      <div className="main">
        <Icon.Add />
        <Icon.AddressBook/>
        <Icon.AddressBook type="alt"/>
        <Icon.Align type="bottom" />
        <Icon.Align type="horizontalCenters" />
        <Icon.Align type="leftEdges" />
        <Icon.Align type="rightEdges" />
        <Icon.Align type="top" />
        <Icon.Align type="verticalCenters" />
        <Icon.Anchor />
        <Icon.Arrow type="up"/>
        <Icon.Arrow type="down"/>
        <Icon.Arrow type="left"/>
        <Icon.Arrow type="right"/>
        <Icon.Asterisk />
        <Icon.Attachment />
        <Icon.Attachment type="alt"/>
        <Icon.Audio type="high"/>
        <Icon.Audio type="mid"/>
        <Icon.Audio type="low"/>
        <Icon.Audio type="mute"/>
        <Icon.BatteryRound type="100"/>
        <Icon.BatteryRound type="80"/>
        <Icon.BatteryRound type="60"/>
        <Icon.BatteryRound type="40"/>
        <Icon.BatteryRound type="20"/>
        <Icon.BatteryRound type="charge"/>
        <Icon.BatteryRound type="empty"/>
        <Icon.BatterySquare type="100"/>
        <Icon.BatterySquare type="80"/>
        <Icon.BatterySquare type="60"/>
        <Icon.BatterySquare type="40"/>
        <Icon.BatterySquare type="20"/>
        <Icon.BatterySquare type="charge"/>
        <Icon.BatterySquare type="empty"/>
        <Icon.Bell />
        <Icon.Bell type="mute"/>
        <Icon.Bin />
        <Icon.Bin type="alt"/>
        <Icon.Book />
        <Icon.Book type="alt"/>
        <Icon.BookLines />
        <Icon.BookLines type="alt" />
        <Icon.Brightness type="high"/>
        <Icon.Brightness type="low"/>
        <Icon.Browser />
        <Icon.Browser type="close"/>
        <Icon.Browser type="download"/>
        <Icon.Browser type="minimize"/>
        <Icon.Browser type="new"/>
        <Icon.Browser type="upload"/>
        <Icon.Browser type="windows"/>
        <Icon.Bulb />
        <Icon.Bulb alt="alt"/>
        <Icon.Bullet />
        <Icon.Bullhorn />
        <Icon.Bullhorn alt="alt"/>
        <Icon.Calendar />
        <Icon.Camera />
        <Icon.Camera type="simple"/>
        <Icon.Camera type="complex"/>
        <Icon.Cassette />
        <Icon.Clipboard />
        <Icon.Clipboard type="alt"/>
        <Icon.Clock />
        <Icon.Cloud />
        <Icon.Cloud type="add"/>
        <Icon.Cloud type="add2"/>
        <Icon.Cloud type="download"/>
        <Icon.Cloud type="remove"/>
        <Icon.Cloud type="remove2"/>
        <Icon.Cloud type="upload"/>
        <Icon.Cmd />
        <Icon.Code />
        <Icon.Compass />
        <Icon.Compose />
        <Icon.Compose type="pencil"/>
        <Icon.Compose type="feather"/>
        <Icon.Compose type="feather2"/>
        <Icon.Contract />
        <Icon.Contract type="outline"/>
        <Icon.Contrast />
        <Icon.Converge />
        <Icon.Crate />
        <Icon.CreditCard />
        <Icon.CreditCard type="dark"/>
        <Icon.CreditCard type="light2"/>
        <Icon.CreditCard type="dark2"/>
        <Icon.Crop />
        <Icon.CurlyBrace />
        <Icon.CurlyBrace type="alt"/>
        <Icon.Database />
        <Icon.Database type="add"/>
        <Icon.Database type="remove"/>
        <Icon.Delete />
        <Icon.Distribute type="bottomEdges"/>
        <Icon.Distribute type="horizontalCenters"/>
        <Icon.Distribute type="leftEdges"/>
        <Icon.Distribute type="rightEdges"/>
        <Icon.Distribute type="topEdges"/>
        <Icon.Distribute type="verticalCenters"/>
        <Icon.Document />
        <Icon.Document type="add"/>
        <Icon.Document type="remove"/>
        <Icon.Droplet />
        <Icon.Ellipsis />
        <Icon.Exclude />
        <Icon.Expand />
        <Icon.Expand type="outline"/>
        <Icon.Eye />
        <Icon.Eye type="alt"/>
        <Icon.Flask />
        <Icon.Flask type="full"/>
        <Icon.Floppy />
        <Icon.Flux />
        <Icon.Folder />
        <Icon.Folder type="add"/>
        <Icon.Folder type="duplicate"/>
        <Icon.Folder type="remove"/>
        <Icon.Grid />
        <Icon.Grid type="alt"/>
        <Icon.Headphones />
        <Icon.Heart />
        <Icon.Heart type="full"/>
        <Icon.Heart type="half"/>
        <Icon.Image />
        <Icon.In />
        <Icon.Inbox />
        <Icon.Inbox type="alt"/>
        <Icon.Inifinity />
        <Icon.Intersect />
        <Icon.Key />
        <Icon.Key type="alt"/>
        <Icon.Keys />
        <Icon.Layout type="columnCenter"/>
        <Icon.Layout type="contentLeft"/>
        <Icon.Layout type="contentRight"/>
        <Icon.Layout type="sidebarLeft"/>
        <Icon.Layout type="sidebarRight"/>
        <Icon.Link />
        <Icon.Link type="alt"/>
        <Icon.List />
        <Icon.List type="alt"/>
        <Icon.Locked />
        <Icon.Mail />
        <Icon.Mail type="alt"/>
        <Icon.Map />
        <Icon.Map type="alt"/>
        <Icon.Marquee />
        <Icon.Marquee type="download"/>
        <Icon.Marquee type="minus"/>
        <Icon.Marquee type="plus"/>
        <Icon.Marquee type="upload"/>
        <Icon.Maximise />
        <Icon.Menu />
        <Icon.Menu type="outline"/>
        <Icon.Menu type="pullDown"/>
        <Icon.Menu type="pullUp"/>
        <Icon.Microphone />
        <Icon.Microphone type="alt"/>
        <Icon.Minus />
        <Icon.Mixer />
        <Icon.Newspaper />
        <Icon.Newspaper type="alt"/>
        <Icon.Nib />
        <Icon.Nope />
        <Icon.Notes />
        <Icon.Out />
        <Icon.Outbox />
        <Icon.Outbox type="alt"/>
        <Icon.Outgoing />
        <Icon.PaperRipped />
        <Icon.PaperRoll />
        <Icon.PaperRoll type="ripped"/>
        <Icon.Paragraph type="center"/>
        <Icon.Paragraph type="centerOutline"/>
        <Icon.Paragraph type="justify"/>
        <Icon.Paragraph type="justifyOutline"/>
        <Icon.Paragraph type="left"/>
        <Icon.Paragraph type="leftOutline"/>
        <Icon.Paragraph type="right"/>
        <Icon.Paragraph type="rightOutline"/>
        <Icon.Pen />
        <Icon.Pencil />
        <Icon.Pin />
        <Icon.Pin type="alt"/>
        <Icon.Plus />
        <Icon.Podcast />
        <Icon.Podcast type="alt"/>
        <Icon.Polaroid />
        <Icon.Polaroid type="alt"/>
        <Icon.Power />
        <Icon.Print />
        <Icon.Quill />
        <Icon.Quill type="alt"/>
        <Icon.Refresh />
        <Icon.Reminder />
        <Icon.Remove />
        <Icon.Repeat />
        <Icon.Repeat type="alt"/>
        <Icon.Return />
        <Icon.Rulers />
        <Icon.Safe />
        <Icon.Search />
        <Icon.Search type="alt"/>
        <Icon.Section />
        <Icon.Settings />
        <Icon.Settings type="alt"/>
        <Icon.Settings type="gears"/>
        <Icon.Shred />
        <Icon.Shuffle />
        <Icon.Sleep />
        <Icon.SpeechBubble type="center"/>
        <Icon.SpeechBubble type="centerFill"/>
        <Icon.SpeechBubble type="left"/>
        <Icon.SpeechBubble type="leftFill"/>
        <Icon.SpeechBubble type="right"/>
        <Icon.SpeechBubble type="rightFill"/>
        <Icon.Spinner />
        <Icon.Spinner type="thin"/>
        <Icon.Spinner type="thick"/>
        <Icon.Split />
        <Icon.Split type="alt"/>
        <Icon.Spool />
        <Icon.SquareBrackets />
        <Icon.Stamp />
        <Icon.Stamp type="alt"/>
        <Icon.Stiffy />
        <Icon.Store />
        <Icon.Store type="alt"/>
        <Icon.Subtract />
        <Icon.Support />
        <Icon.Support type="alt"/>
        <Icon.Swap />
        <Icon.Swap type="alt"/>
        <Icon.Swatch />
        <Icon.Swatches />
        <Icon.Switch type="on"/>
        <Icon.Switch type="off"/>
        <Icon.Tag />
        <Icon.Tag type="horizontal"/>
        <Icon.Tag type="stringOutline"/>
        <Icon.Tag type="stringFill"/>
        <Icon.Terminal />
        <Icon.Terminal type="header"/>
        <Icon.Terminal type="browser"/>
        <Icon.Tilde />
        <Icon.Timeline />
        <Icon.Toggle type="off"/>
        <Icon.Toggle type="on"/>
        <Icon.Transfer />
        <Icon.Tray />
        <Icon.Unite />
        <Icon.Unlocked />
        <Icon.User />
        <Icon.User type="outline"/>
        <Icon.User type="circle"/>
        <Icon.UserCard />
        <Icon.Users />
        <Icon.Video />
        <Icon.Video type="alt"/>
        <Icon.Vinyl />
        <Icon.Voicemail />
        <Icon.Wallet />
        <Icon.Wallet type="alt"/>
        <Icon.Wave />
        <Icon.Wave type="alt"/>
        <Icon.Wifi/>
        <Icon.Wifi type="mid"/>
        <Icon.Wifi type="low"/>
        <Icon.Wiggle />
        <Icon.Windows />
        <Icon.Zoom type="in"/>
        <Icon.Zoom type="out"/>
      </div>
    );
  }
});
React.render(<App />, document.getElementById('content'));

module.exports = App;
