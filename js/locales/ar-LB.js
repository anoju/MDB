(function () {
	"use strict";

	if (typeof Date.dp_locales === 'undefined') {
		Date.dp_locales = {
			"texts": {
				"buttonTitle": "حدد تاريخ ...",
				"buttonLabel": "انقر أو اضغط على مفتاح Enter أو مفتاح المسافة لفتح التقويم",
				"prevButtonLabel": "إذهب إلى الشهر السابق",
				"nextButtonLabel": "إذهب إلى الشهر المقبل",
				"closeButtonTitle": "قريب",
				"closeButtonLabel": "إغلاق التقويم",
				"prevMonthButtonLabel": "انتقل إلى العام السابق",
				"prevYearButtonLabel": "انتقل إلى عشرين عاما السابقة",
				"nextMonthButtonLabel": "انتقل إلى العام المقبل",
				"nextYearButtonLabel": "الذهاب إلى السنوات العشرين المقبلة",
				"changeMonthButtonLabel": "انقر أو اضغط على مفتاح Enter أو المسافة لتغيير الشهر",
				"changeYearButtonLabel": "انقر أو اضغط على مفتاح Enter أو المسافة لتغيير السنة",
				"changeRangeButtonLabel": "انقر أو اضغط على مفتاح Enter أو المسافة للذهاب إلى السنوات العشرين المقبلة",
				"calendarHelp": "- السهم للأعلى وسهم لأسفل - يذهب إلى نفس اليوم من الأسبوع في الأسبوع السابق أو التالي على التوالي. إذا وصلت إلى نهاية الشهر، وتواصل في الشهر التالي أو السابق، حسب الاقتضاء.\r\n- السهم الأيسر والسهم الأيمن - سلف يوم واحد إلى آخر، كما في سلسلة متصلة. يتم نقل التركيز بصريا من يوم إلى يوم، ويلتف من صف إلى صف في الشبكة من الأيام.\r\n- التحكم + صفحة لأعلى - للانتقال إلى نفس التاريخ من العام السابق.\r\n- التحكم + صفحة لأسفل - للانتقال إلى التاريخ نفسه في العام المقبل.\r\n- الصفحة الرئيسية - للانتقال إلى اليوم الأول من الشهر الحالي.\r\n- انتهى - للانتقال إلى اليوم الأخير من الشهر الحالي.\r\n- صفحة لأعلى - للانتقال إلى نفس التاريخ في الشهر السابق.\r\n- صفحة لأسفل - للانتقال إلى نفس التاريخ في الشهر المقبل.\r\n- أدخل أو اسباس - يغلق التقويم، ويظهر التاريخ المحدد في مربع النص المرتبطة بها.\r\n- الهروب - إغلاق تقويم دون اتخاذ أي إجراء."
			},
			"directionality": "RTL",
			"month_names": [
				"كانون الثاني",
				"شباط",
				"آذار",
				"نيسان",
				"أيار",
				"حزيران",
				"تموز",
				"آب",
				"أيلول",
				"تشرين الأول",
				"تشرين الثاني",
				"كانون الأول"
			],
			"month_names_abbreviated": [
				"كانون الثاني",
				"شباط",
				"آذار",
				"نيسان",
				"أيار",
				"حزيران",
				"تموز",
				"آب",
				"أيلول",
				"تشرين الأول",
				"تشرين الثاني",
				"كانون الأول"
			],
			"month_names_narrow": [
				"ك",
				"ش",
				"آ",
				"ن",
				"أ",
				"ح",
				"ت",
				"آ",
				"أ",
				"ت",
				"ت",
				"ك"
			],
			"day_names": [
				"الأحد",
				"الاثنين",
				"الثلاثاء",
				"الأربعاء",
				"الخميس",
				"الجمعة",
				"السبت"
			],
			"day_names_abbreviated": [
				"الأحد",
				"الاثنين",
				"الثلاثاء",
				"الأربعاء",
				"الخميس",
				"الجمعة",
				"السبت"
			],
			"day_names_short": [
				"الأحد",
				"الاثنين",
				"الثلاثاء",
				"الأربعاء",
				"الخميس",
				"الجمعة",
				"السبت"
			],
			"day_names_narrow": [
				"ح",
				"ن",
				"ث",
				"ر",
				"خ",
				"ج",
				"س"
			],
			"day_periods": {
				"am": "ص",
				"noon": "ظهرا",
				"pm": "م"
			},
			"day_periods_abbreviated": {
				"am": "ص",
				"noon": "ظهرا",
				"pm": "م"
			},
			"day_periods_narrow": {
				"am": "ص",
				"noon": "ظ",
				"pm": "م"
			},
			"quarter_names": [
				"الربع الأول",
				"الربع الثاني",
				"الربع الثالث",
				"الربع الرابع"
			],
			"quarter_names_abbreviated": [
				"الربع الأول",
				"الربع الثاني",
				"الربع الثالث",
				"الربع الرابع"
			],
			"quarter_names_narrow": [
				"١",
				"٢",
				"٣",
				"٤"
			],
			"era_names": [
				"قبل الميلاد",
				"ميلادي"
			],
			"era_names_abbreviated": [
				"ق.م",
				"م"
			],
			"era_names_narrow": [
				"ق.م",
				"م"
			],
			"full_format": "EEEE، d MMMM، y",
			"long_format": "d MMMM، y",
			"medium_format": "dd‏/MM‏/y",
			"short_format": "d‏/M‏/y",
			"firstday_of_week": 1
		};
	}
})();