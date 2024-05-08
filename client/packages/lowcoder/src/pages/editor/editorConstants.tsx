import { UICompType } from "comps/uiCompRegistry";
import {
  LeftCommon,
  AudioCompIconSmall,
  AutoCompleteCompIconSmall,
  ButtonCompIconSmall,
  CardCompIconSmall,
  CalendarCompIconSmall,
  CarouselCompIconSmall,
  CascaderCompIconSmall,
  ChartCompIconSmall,
  CheckboxCompIconSmall,
  CollapsibleContainerCompIconSmall,
  CommentCompIconSmall,
  ContainerCompIconSmall,
  CustomCompIconSmall,
  DateCompIconSmall,
  DateRangeCompIconSmall,
  DividerCompIconSmall,
  DrawerCompIconSmall,
  DropdownCompIconSmall,
  FileViewerCompIconSmall,
  FloatingButtonCompIconSmall,
  FloatingTextCompIconSmall,
  FormCompIconSmall,
  GridCompIconSmall,
  IconCompIconSmall,
  IconButtonCompIconSmall,
  IFrameCompIconSmall,
  ImageCompIconSmall,
  ImageEditorCompIconSmall,
  InputCompIconSmall,
  JsonEditorCompIconSmall,
  JsonExplorerCompIconSmall,
  JsonFormCompIconSmall,
  LinkCompIconSmall,
  ListViewCompIconSmall,
  LottieAnimationCompIconSmall,
  MentionCompIconSmall,
  MermaidCompIconSmall,
  ModalCompIconSmall,
  MultiSelectCompIconSmall,
  NavComIconSmall,
  NumberInputCompIconSmall,
  PageLayoutCompIconSmall,
  PasswordCompIconSmall,
  ProcessCircleCompIconSmall,
  ProgressCompIconSmall,
  QRCodeCompIconSmall,
  RadioCompIconSmall,
  RangeSliderCompIconSmall,
  RatingCompIconSmall,
  ResponsiveLayoutCompIconSmall,
  RichTextEditorCompIconSmall,
  ScannerCompIconSmall,
  SegmentedCompIconSmall,
  SelectCompIconSmall,
  SignatureCompIconSmall,
  SliderCompIconSmall,
  StepCompIconSmall,
  SwitchCompIconSmall,
  TabbedContainerCompIconSmall,
  TableCompIconSmall,
  TextAreaCompIconSmall,
  TextCompIconSmall,
  TimeCompIconSmall,
  TimeLineCompIconSmall,
  TimeRangeCompIconSmall,
  ToggleButtonCompIconSmall,
  TourCompIconSmall,
  TreeDisplayCompIconSmall,
  TreeSelectCompIconSmall,
  UploadCompIconSmall,
  VideoCameraStreamCompIconSmall,
  VideoCompIconSmall,
  VideoMeetingRoomCompIconSmall,
  VideoScreenshareCompIconSmall,
  AvatarCompIconSmall,
  AvatarGroupCompIconSmall,
  ColorPickerCompIconSmall,
  TransferCompIconSmall,
} from "lowcoder-design";

export const CompStateIcon: {
  [key in UICompType]: JSX.Element;
} = {
  audio: <AudioCompIconSmall />,
  autocomplete: <AutoCompleteCompIconSmall />,
  button: <ButtonCompIconSmall />,
  calendar: <CalendarCompIconSmall />,
  carousel: <CarouselCompIconSmall />,
  cascader: <CascaderCompIconSmall />,
  chart: <ChartCompIconSmall />,
  checkbox: <CheckboxCompIconSmall />,
  collapsibleContainer: <CollapsibleContainerCompIconSmall />,
  comment: <CommentCompIconSmall />,
  container: <ContainerCompIconSmall />,
  controlButton: <IconButtonCompIconSmall />,
  custom: <CustomCompIconSmall />,
  date: <DateCompIconSmall />,
  dateRange: <DateRangeCompIconSmall />,
  divider: <DividerCompIconSmall />,
  drawer: <DrawerCompIconSmall />,
  dropdown: <DropdownCompIconSmall />,
  file: <UploadCompIconSmall />,
  fileViewer: <FileViewerCompIconSmall />,
  floatTextContainer: <FloatingTextCompIconSmall />,
  form: <FormCompIconSmall />,
  grid: <GridCompIconSmall />,
  icon: <IconCompIconSmall />,
  iframe: <IFrameCompIconSmall />,
  image: <ImageCompIconSmall />,
  imageEditor: <ImageEditorCompIconSmall />,
  input: <InputCompIconSmall />,
  jsonEditor: <JsonEditorCompIconSmall />,
  jsonExplorer: <JsonExplorerCompIconSmall />,
  jsonLottie: <LottieAnimationCompIconSmall />, // Assuming related to JSON handling, adjust if needed
  jsonSchemaForm: <JsonFormCompIconSmall />,
  link: <LinkCompIconSmall />,
  listView: <ListViewCompIconSmall />,
  meeting: <VideoMeetingRoomCompIconSmall />,
  mention: <MentionCompIconSmall />,
  mermaid: <MermaidCompIconSmall />,
  modal: <ModalCompIconSmall />,
  module: <LeftCommon />,  // Placeholder or specify if there's a dedicated icon
  moduleContainer: <LeftCommon />,  // Placeholder or specify if there's a dedicated icon
  multiSelect: <MultiSelectCompIconSmall />,
  navigation: <NavComIconSmall />,
  numberInput: <NumberInputCompIconSmall />,
  npmPlugin: <LeftCommon />,  // Placeholder or specify if there's a dedicated icon
  pageLayout: <PageLayoutCompIconSmall />,
  password: <PasswordCompIconSmall />,
  progress: <ProgressCompIconSmall />,
  progressCircle: <ProcessCircleCompIconSmall />,
  qrCode: <QRCodeCompIconSmall />,
  radio: <RadioCompIconSmall />,
  rangeSlider: <RangeSliderCompIconSmall />,
  rating: <RatingCompIconSmall />,
  responsiveLayout: <ResponsiveLayoutCompIconSmall />,
  richTextEditor: <RichTextEditorCompIconSmall />,
  scanner: <ScannerCompIconSmall />,
  segmentedControl: <SegmentedCompIconSmall />,
  select: <SelectCompIconSmall />,
  sharingcomponent: <VideoScreenshareCompIconSmall />,
  signature: <SignatureCompIconSmall />,
  slider: <SliderCompIconSmall />,
  step: <StepCompIconSmall />,
  switch: <SwitchCompIconSmall />,
  tabbedContainer: <TabbedContainerCompIconSmall />,
  table: <TableCompIconSmall />,
  text: <TextCompIconSmall />,
  textArea: <TextAreaCompIconSmall />,
  time: <TimeCompIconSmall />,
  timeRange: <TimeRangeCompIconSmall />,
  timeline: <TimeLineCompIconSmall />,
  toggleButton: <ToggleButtonCompIconSmall />,
  tour: <TourCompIconSmall />,  // Placeholder or specify if there's a dedicated icon
  tree: <TreeDisplayCompIconSmall />,
  treeSelect: <TreeSelectCompIconSmall />,
  video: <VideoCompIconSmall />,
  videocomponent: <VideoCameraStreamCompIconSmall />,
  
  hillchart: <LeftCommon />,  // Placeholder or specify if there's a dedicated icon
  openLayersGeoMap: <LeftCommon />,  // Placeholder or specify if there's a dedicated icon
  chartsGeoMap: <LeftCommon />,  // Placeholder or specify if there's a dedicated icon
  bpmnEditor: <LeftCommon />,  // Placeholder or specify if there's a dedicated icon
  turnstileCaptcha: <LeftCommon />,  // Placeholder or specify if there's a dedicated icon
  pivotTable: <LeftCommon />,  // Placeholder or specify if there's a dedicated icon
  funnelChart: <LeftCommon />,
  gaugeChart: <LeftCommon />,
  sankeyChart : <LeftCommon />,
  candleStickChart : <LeftCommon />,
  radarChart : <LeftCommon />,
  heatmapChart : <LeftCommon />,
  graphChart : <LeftCommon />,
  treeChart : <LeftCommon />,
  treemapChart : <LeftCommon />,
  sunburstChart : <LeftCommon />,
  themeriverChart : <LeftCommon />,
  basicChart : <LeftCommon />,

  avatar: <AvatarCompIconSmall />,
  avatarGroup: <AvatarGroupCompIconSmall />,
  colorPicker: <ColorPickerCompIconSmall />,
  floatingButton: <FloatingButtonCompIconSmall />,
  transfer: <TransferCompIconSmall />,
  card: <CardCompIconSmall />,
  timer: <TimeRangeCompIconSmall/>,
};
