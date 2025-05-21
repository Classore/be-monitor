export enum YeildPredictionEnum {
  very_low = 'very_low',
  low = 'low',
  medium = 'medium',
  high = 'high',
  very_high = 'very_high',
}

export enum YesOrNo {
  YES = 'YES',
  NO = 'NO',
}

export enum YesOrNoOfTrueOrFalse {
  YES = 'YES',
  NO = 'NO',
  true = 'true',
  false = 'false',
}

export enum LearningOrTest {
  LEARNING = 'LEARNING',
  TEST = 'TEST',
}

export enum MailSendingOptions {
  SENDGRID = 'SENDGRID',
  GMAIL = 'GMAIL',
  MAILGUN = 'MAILGUN',
  MAILTRAP = 'MAILTRAP',
  BREVO = 'BREVO',
}

export enum ReservationStatus {
  PENDING = 'PENDING',
  CONFIRMED = 'CONFIRMED',
  CANCELLED = 'CANCELLED',
  COMPLETED = 'COMPLETED',
}

export enum PaymentChannel {
  CARD = 'CARD',
  TRANSFER = 'TRANSFER',
}

export enum IdentityVerificationType {
  NIN = 'NIN',
  BVN = 'BVN',
  INTERNATIONAL_PASSPORT = 'INTERNATIONAL_PASSPORT',
  DRIVERS_LICENSE = 'DRIVERS_LICENSE',
  VOTERS_CARD = 'VOTERS_CARD',
}

export enum PropertyVerificationType {
  ELECTRICITY_BILL = 'ELECTRICITY_BILL',
  WASTE_BILL = 'WASTE_BILL',
}

export enum AmenityType {
  BASIC = 'BASIC',
  SPECIAL = 'SPECIAL',
  OTHER = 'OTHER',
}

export enum ChatMessageStatus {
  PENDING = 'PENDING',
  SENT = 'SENT',
  DELIVERED = 'DELIVERED',
  SEEN = 'SEEN',
  FAILED = 'FAILED',
}

export enum TransactionType {
  CREDIT = 'CREDIT',
  DEBIT = 'DEBIT',
  REVERSAL = 'REVERSAL',
}

export enum TransactionStatus {
  PENDING = 'PENDING',
  SUCCESSFUL = 'SUCCESSFUL',
  FAILED = 'FAILED',
  REVERSAL = 'REVERSAL',
}

export enum TransactionCurrency {
  NGN = 'NGN',
}

export enum TransactionNarration {
  RESERVATION = 'RESERVATION',
  WITHDRAWAL = 'WITHDRAWAL',
  STUDY_PACK = 'STUDY_PACK',
  REDEEM_POINTS = 'REDEEM_POINTS',
}

export enum PaystackWebHookEvents {
  TRANSFER = 'transfer',
  CHARGE = 'charge',
  PAYMENTREQUEST = 'paymentrequest',
  TRANSFER_SUCCESS = 'transfer.success',
  TRANSFER_FAILED = 'transfer.failed',
  TRANSFER_REVERSED = 'transfer.reversed',
  TRANSACTION_SUCCESSFUL = 'charge.success',
}
export enum PaystackWebHookEventsStatus {
  SUCCESS = 'success',
  FAILED = 'failed',
  REVERSED = 'reversed',
}

export enum otpPurposeOptions {
  FORGOT_PASSWORD = 'FORGOT_PASSWORD',
  SIGNUP_COMPLETE = 'SIGNUP_COMPLETE',
  PASSWORD_RESET = 'PASSWORD_RESET',
  ACCOUNT_VALIDATION = 'ACCOUNT_VALIDATION',
}

export enum Order {
  ASC = 'ASC',
  DESC = 'DESC',
}

export enum UserType {
  USER = 'USER',
  ADMIN = 'ADMIN',
  HOST = 'HOST',
}

export enum Timeline {
  YESTERDAY = 'YESTERDAY',
  TODAY = 'TODAY',
  THIS_WEEK = 'THIS_WEEK',
  LAST_7_DAYS = 'LAST_7_DAYS',
  LAST_WEEK = 'LAST_WEEK',
  LAST_2_WEEKS = 'LAST_2_WEEKS',
  THIS_MONTH = 'THIS_MONTH',
  LAST_3_MONTHS = 'LAST_3_MONTHS',
  LAST_6_MONTHS = 'LAST_6_MONTHS',
  LAST_12_MONTHS = 'LAST_12_MONTHS',
  THIS_YEAR = 'THIS_YEAR',
  LAST_YEAR = 'LAST_YEAR',
  LAST_2_YEARS = 'LAST_2_YEARS',
  ALL_TIME = 'ALL_TIME',
}

export enum WaitlistType {
  PARENT = 'PARENT',
  STUDENT = 'STUDENT',
}

export enum PointType {
  ACTIVITY = 'ACTIVITY',
  REFERRAL = 'REFERRAL',
}

export enum SortType {
  NAME = 'NAME',
  DATE_CREATED = 'DATE_CREATED',
}

export enum SortOrder {
  ASC = 'ASC',
  DESC = 'DESC',
}

export enum AdminPermissions {
  STUDENT = 'STUDENT',
  ADMIN = 'ADMIN',
  PRINCIPAL_ADMIN = 'PRINCIPAL_ADMIN',
  TUTOR = 'TUTOR',
  VIDEOS = 'VIDEOS',
  TRANSACTIONS = 'TRANSACTIONS',
  WAITLIST = 'WAITLIST',
  USER = 'USER',
  MARKETER = 'MARKETER',
}

export enum ReadOrWrite {
  READ = 'READ',
  WRITE = 'WRITE',
}

export enum trueOrFalse {
  TRUE = 'true',
  FALSE = 'false',
}

export enum AllowOrDeny {
  ALLOWED = 'ALLOWED',
  DENIED = 'DENIED',
}

export enum SignupChannel {
  DEFAULT = 'DEFAULT',
  GOOGLE = 'GOOGLE',
}

export enum StatusMessages {
  success = 'success',
  error = 'error',
}

export enum NodeEnvironment {
  production = 'production',
  development = 'development',
  local = 'local',
}

export enum StudyPackTimeline {
  PENDING = 'PENDING',
  ONGOING = 'ONGOING',
  COMPLETED = 'COMPLETED',
  EXPIRED = 'EXPIRED',
}
export enum NodeServer {
  LOCAL = 'local',
  DEVELOPMENT = 'development',
}

export enum QuestionType {
  MULTICHOICE = 'MULTICHOICE',
  FILL_IN_THE_GAP = 'FILL_IN_THE_GAP',
  YES_OR_NO = 'YES_OR_NO',
  SHORT_ANSWER = 'SHORT_ANSWER',
  LISTENING = 'LISTENING',
  SPEAKING = 'SPEAKING',
}

export enum ModelType {
  USER = 'USER',
  ADMIN = 'ADMIN',
  CHAPTER = 'CHAPTER',
  CHAPTER_MODULE = 'CHAPTER_MODULE',
  COURSE = 'COURSE',
  EXAM_BUNDLE = 'EXAM_BUNDLE',
  EXAMINATION = 'EXAMINATION',
  OPTION = 'OPTION',
  QUESTION = 'QUESTION',
  QUIZ = 'QUIZ',
  QUIZ_ATTEMPT = 'QUIZ_ATTEMPT',
  ROLE = 'ROLE',
  SCORE = 'SCORE',
  SUBJECT = 'SUBJECT',
  STUDENT_TIMELINE = 'STUDENT_TIMELINE',
}

export enum BooleanString {
  true = 'true',
  false = 'false',
}

export enum RatingPurpose {
  exam = 'exam',
  exam_bundle = 'exam_bundle',
  subject = 'subject',
}

export enum WebSocketEventsEnum {
  video_upload_status = 'video_upload_status',
  join_user_rooms = 'join_user_rooms',
  join_room = 'join_room',
  new_chat_message = 'new_chat_message',
  receive_chat_message = 'receive_chat_message',
  is_typing = 'is_typing',
  message_delivered = 'message_delivered',
}

export enum VideoUploadProgressStatus {
  started = 'started',
  uploading = 'uploading',
  waiting_for_upload_completion = 'waiting for upload to complete',
  completed = 'completed',
  failed = 'failed',
  transcoding_in_progress = 'transcoding_in_progress',
  transcoding_completed = 'transcoding_completed',
}

export enum TransacodingJobState {
  PROCESSING_STATE_UNSPECIFIED = 'PROCESSING_STATE_UNSPECIFIED',
  PENDING = 'PENDING',
  RUNNING = 'RUNNING',
  SUCCEEDED = 'SUCCEEDED',
  FAILED = 'FAILED',
  PROCESSING = 'PROCESSING',
}

export enum AudioEncoderFormatsForGoogle {
  FLAC = 'FLAC',
  LINEAR16 = 'LINEAR16',
  MULAW = 'MULAW',
  AMR = 'AMR',
  AMR_WB = 'AMR_WB',
  OGG_OPUS = 'OGG_OPUS',
  SPEEX_WITH_HEADER_BYTE = 'SPEEX_WITH_HEADER_BYTE',
}

export enum AudioFormats {
  wav = 'wav',
  mp3 = 'mp3',
  aac = 'aac',
  aiff = 'aiff',
  wma = 'wma',
  alac = 'alac',
  ogg = 'ogg',
  pcm = 'pcm',
  mp4 = 'mp4',
  flac = 'flac',
  amr = 'amr',
}

export enum NotificationCategory {
  GENERAL = 'GENERAL',
  CHAT = 'CHAT',
  COURSE = 'COURSE',
  QUIZ = 'QUIZ',
  SUBSCRIPTION = 'SUBSCRIPTION',
  EXAM = 'EXAM',
  EXAM_BUNDLE = 'EXAM_BUNDLE',
  STUDY_PACK = 'STUDY_PACK',
  STUDY_PLAN = 'STUDY_PLAN',
  STUDY_PLAN_RENEWAL = 'STUDY_PLAN_RENEWAL',
  STUDY_PLAN_EXPIRATION = 'STUDY_PLAN_EXPIRATION',
  STUDY_PLAN_CANCELLATION = 'STUDY_PLAN_CANCELLATION',
  STUDY_PLAN_COMPLETION = 'STUDY_PLAN_COMPLETION',
}

export enum NotificationRecepient {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

export enum EventType {
  USER_LOGIN = 'USER_LOGIN',
  MODULE_CONSUMPTION = 'MODULE_CONSUMPTION',
  MODULE_COMPLETION = 'MODULE_COMPLETION',
  QUIZ_ATTEMPT = 'QUIZ_ATTEMPT',
  BUNDLE_PURCHASE = 'BUNDLE_PURCHASE',
  WITHDRAWAL_REQUEST = 'WITHDRAWAL_REQUEST',
}
