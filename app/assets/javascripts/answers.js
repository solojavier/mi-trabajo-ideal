var validAttributes = function(selector) {
  var emptyFields = false;

  selector.each(function() {
    if ( $( this ).children('input').val() == '' ) {
      $( this ).addClass('has-error')
      emptyFields = true;
    } else {
      $( this ).removeClass('has-error')
    }
  });

  return !emptyFields;
};

var setWorkAttributes = function() {
  $( '.work-ideal-attribute' ).each(function(index) {
    $('.work-attribute:nth-child('+(index+1)+')').children('label').text($( this ).children('input').val());
  });
};

var setWorkSelect = function() {
  $( '.work-ideal-attribute' ).each(function(index) {
    var text = $( this ).children('input').val();
    $('#answer_work_attribute_selected_index').append($('<option>', {
      value: index+1, text: text
    }));
  });
};

$( document  ).ready(function() {
  $( '#values' ).hide();
  $( '#company' ).hide();
  $( '#action' ).hide();
  $( '#work-ideal' ).hide();
  $( '#work' ).hide();
  $( '#work-select' ).hide();
  $( '#commitment' ).hide();
  $( '#feeling' ).hide();

  $( '#welcome-next' ).click(function( event ) {
    event.preventDefault();

    if ( $( '#answer_username' ).val() == '' ) {
      $( '#username-group' ).addClass('has-error');
    } else {
      $( '#welcome' ).hide();
      $( '#values' ).show();
    }
  });

  $( '#values-next' ).click(function( event ) {
    event.preventDefault();

    if ( validAttributes( $( '.values-attribute' ) ) ) {
      $( '#values' ).hide();
      $( '#company' ).show();
    }
  });

  $( '#company-next' ).click(function( event ) {
    event.preventDefault();

    if ( validAttributes( $( '.company-attribute' ) ) ) {
      $( '#company' ).hide();
      $( '#action' ).show();
    }
  });

  $( '#action-next' ).click(function( event ) {
    event.preventDefault();

    if ( validAttributes( $( '.action-attribute' ) ) ) {
      $( '#action' ).hide();
      $( '#work-ideal' ).show();
    }
  });

  $( '#work-ideal-next' ).click(function( event ) {
    event.preventDefault();

    if ( validAttributes( $( '.work-ideal-attribute' ) ) ) {
      setWorkAttributes();
      $( '#work-ideal' ).hide();
      $( '#work' ).show();
    }
  });

  $( '#work-next' ).click(function( event ) {
    event.preventDefault()

    if ( validAttributes( $( '.work-attribute' ) ) ) {
      setWorkSelect();
      $( '#work' ).hide();
      $( '#work-select' ).show();
    }
  });

  $( '#work-select-next' ).click(function( event ) {
    event.preventDefault();
    var text = $("#answer_work_attribute_selected_index :selected").text();
    $("#commitment").html($('#commitment').html().replace('ATTRIBUTE', text));
    $( '#work-select' ).hide();
    $( '#commitment' ).show();
  });

  $( '#commitment-next' ).click(function( event ) {
    event.preventDefault()

    if ( validAttributes( $( '.commitment-attribute' ) ) ) {
      $( '#commitment' ).hide();
      $( '#feeling' ).show();
    }
  });

  $( '#submit' ).click(function( event ) {
    if ( !validAttributes( $( '.feeling-attribute' ) ) ) {
      event.preventDefault();
    }
  });

});
