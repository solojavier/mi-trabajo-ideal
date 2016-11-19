

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
    $('.work_improvement-attribute:nth-child('+(index+1)+')').children('label').text($( this ).children('input').val());
  });
};

var setWorkSelect = function() {
  $( '.work-ideal-attribute' ).each(function(index) {
    var text = $( this ).children('input').val() + ' - ' +
      $( '.work-attribute' ).children('input').eq(index).attr('value');
    $('#work_attribute_selected_index').append($('<label>',
                                                 { for: text, text: text }));
    $('#work_attribute_selected_index').append($('<input>', {
      id: text, checked: true, type: 'radio', value: index+1,
      name: "answer[work_attribute_selected_index]"
    }));
  });
};

var setCommitmentTitle = function() {
  var text   = $("#work_attribute_selected_index").children("input:checked").attr('id');
  var target = $("#commitment").children(".panel-heading");

  target.html(target.html().replace('ATTRIBUTE', text));
};

$( document ).ready(function() {
  $('.rank-attribute').children('input').slider();

  $( '#values' ).hide();
  $( '#company' ).hide();
  $( '#action' ).hide();
  $( '#work-ideal' ).hide();
  $( '#work' ).hide();
  $( '#work-select' ).hide();
  $( '#commitment' ).hide();
  $( '#responsible' ).hide();
  $( '#action_missing' ).hide();
  $( '#work_improvement' ).hide();
  $( '#score_boss' ).hide();
  $( '#score_company' ).hide();
  $( '#rank_training' ).hide();
  $( '#rank_development' ).hide();
  $( '#rank_work' ).hide();
  $( '#rank_team' ).hide();
  $( '#rank_information' ).hide();
  $( '#rank_voice' ).hide();
  $( '#rank_voice_boss' ).hide();
  $( '#rank_know' ).hide();
  $( '#rank_comunication' ).hide();
  $( '#rank_security' ).hide();
  $( '#rank_security_2' ).hide();
  $( '#rank_expectations' ).hide();
  $( '#rank_expectations_2' ).hide();
  $( '#rank_culture' ).hide();
  $( '#rank_boss' ).hide();
  $( '#rank_boss_2' ).hide();
  $( '#rank_respect' ).hide();
  $( '#rank_happywork' ).hide();
  $( '#rank_happywork_2' ).hide();
  $( '#feeling' ).hide();
  $( '#current_feeling_2' ).hide();

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
      // $( '#action' ).show();
      $( '#work-ideal' ).show();
    }
  });

  // $( '#action-next' ).click(function( event ) {
    //   event.preventDefault();

    //   if ( validAttributes( $( '.action-attribute' ) ) ) {
    //     $( '#action' ).hide();
    //     $( '#work-ideal' ).show();
    //   }
  // });

  $( '#work-ideal-next' ).click(function( event ) {
    event.preventDefault();

    if ( validAttributes( $( '.work-ideal-attribute' ) ) ) {
      setWorkAttributes();
      $( '#work-ideal' ).hide();
      $( '#work' ).show();
      $('.work-attribute').children('input').slider();
    }
  });

  $( '#work-next' ).click(function( event ) {
    event.preventDefault()

    if ( validAttributes( $( '.work-attribute' ) ) ) {
      // setWorkSelect();
      $( '#work' ).hide();
      $( '#work_improvement' ).show();
      // $('.work_improvement-attribute').children('input').slider();
    }
  });

  $( '#work_improvement-next' ).click(function( event ) {
    event.preventDefault()

    if ( validAttributes( $( '.work_improvement-attribute' ) ) ) {
      $( '#work_improvement' ).hide();
      $( '#score_boss' ).show();
      // $( '#feeling' ).show();
      $('.work_improvement-attribute').children('input').slider();
    }
  });

  $( '#score_boss-next' ).click(function( event ){
    event.preventDefault()

      if( validAttributes( $( '.work-attribute' ) ) ){
        $( '#score_boss' ).hide();
        $( '#score_company' ).show();

      }
  });

  $( '#score_company-next' ).click(function( event ){
    event.preventDefault()

      if( validAttributes( $( '.work-attribute' ) ) ){
        $( '#score_company' ).hide();
        $( '#rank_training' ).show();
      }
  });

  $( '#rank_training-next' ).click(function( event ){
    event.preventDefault()

      if( validAttributes( $( '.work-attribute' ) ) ){
        $( '#rank_training' ).hide();
        $( '#rank_development' ).show();
      }
  });

  $( '#rank_development-next' ).click(function( event ){
    event.preventDefault()

      if( validAttributes( $( '.work-attribute' ) ) ){
        $( '#rank_development' ).hide();
        $( '#rank_work' ).show();
      }
  });

  $( '#rank_work-next' ).click(function( event ){
    event.preventDefault()

    if( validAttributes( $( '.rank-attribute' ) ) ){
      $( '#rank_work' ).hide();
      $( '#rank_team' ).show();
    }
  });

  $( '#rank_team-next' ).click(function( event ){
    event.preventDefault();

    if ( validAttributes( $( '.rank-attribute' ) ) ){
      $( '#rank_team' ).hide();
      $( '#rank_information' ).show();
    };
  })
  $( '#rank_information-next' ).click(function( event ){
    event.preventDefault();

    if ( validAttributes( $( '.rank-attribute' ) ) ){
      $( '#rank_information' ).hide();
      $( '#rank_voice' ).show();
    };
  })
  $( '#rank_voice-next' ).click(function( event ){
    event.preventDefault();

    if ( validAttributes( $( '.rank-attribute' ) ) ){
      $( '#rank_voice' ).hide();
      $( '#rank_voice_boss').show();
    };
  })
  $( '#rank_voice_boss-next' ).click(function( event ){
    event.preventDefault();

    if ( validAttributes( $( '.rank-attribute' ) ) ){
      $( '#rank_voice_boss' ).hide();
      $( '#rank_know' ).show();
    };
  })
  $( '#rank_know-next' ).click(function( event ){
    event.preventDefault();

    if ( validAttributes( $( '.rank-attribute' ) ) ){
      $( '#rank_know' ).hide();
      $( '#rank_comunication').show();
    };
  })
  $( '#rank_comunication-next' ).click(function( event ){
    event.preventDefault();

    if ( validAttributes( $( '.rank-attribute' ) ) ){
      $( '#rank_comunication' ).hide();
      $( '#rank_security' ).show();
    };
  })
  $( '#rank_security-next' ).click(function( event ){
    event.preventDefault();

    if ( validAttributes( $( '.rank-attribute' ) ) ){
      $( '#rank_security' ).hide();
      $( '#rank_security_2' ).show();
    };
  })
  $( '#rank_security_2-next' ).click(function( event ){
    event.preventDefault();

    if ( validAttributes( $( '.rank-attribute' ) ) ){
      $( '#rank_security_2' ).hide();
      $( '#rank_expectations' ).show();
    };
  })
  $( '#rank_expectations-next' ).click(function( event ){
    event.preventDefault();

    if ( validAttributes( $( '.rank-attribute' ) ) ){
      $( '#rank_expectations' ).hide();
      $( '#rank_expectations_2' ).show();
    };
  })
  $( '#rank_expectations_2-next' ).click(function( event ){
    event.preventDefault();

    if ( validAttributes( $( '.rank-attribute' ) ) ){
      $( '#rank_expectations_2' ).hide();
      $( '#rank_culture' ).show();
    };
  })
  $( '#rank_culture-next' ).click(function( event ){
    event.preventDefault();

    if ( validAttributes( $( '.rank-attribute' ) ) ){
      $( '#rank_culture' ).hide();
      $( '#rank_boss' ).show();
    };
  })
  $( '#rank_boss-next' ).click(function( event ){
    event.preventDefault();

    if ( validAttributes( $( '.rank-attribute' ) ) ){
      $( '#rank_boss' ).hide();
      $( '#rank_boss_2').show();
    };
  })
  $( '#rank_boss_2-next' ).click(function( event ){
    event.preventDefault();

    if ( validAttributes( $( '.rank-attribute' ) ) ){
      $( '#rank_boss_2' ).hide();
      $( '#rank_respect' ).show();
    };
  })
  $( '#rank_respect-next' ).click(function( event ){
    event.preventDefault();

    if ( validAttributes( $( '.rank-attribute' ) ) ){
      $( '#rank_respect' ).hide();
      $( '#rank_happywork' ).show();
    };
  })
  $( '#rank_happywork-next' ).click(function( event ){
    event.preventDefault();

    if ( validAttributes( $( '.rank-attribute' ) ) ){
      $( '#rank_happywork' ).hide();
      $( '#rank_happywork_2' ).show();
    };
  })
  $( '#rank_happywork_2-next' ).click(function( event ){
    event.preventDefault();

    if ( validAttributes( $( '.rank-attribute' ) ) ){
      $( '#rank_happywork_2' ).hide();
      $( '#feeling' ).show();
    };
  })

    $( '#feeling-next' ).click(function( event ) {
    event.preventDefault()

    if ( validAttributes( $( '.feeling-attribute' ) ) ) {
      console.log("antes de feeling 2");
      $( '#feeling' ).hide();
      $( '#current_feeling_2' ).show();
    }
  });

  $( '#current_feeling_2-next' ).click(function( event ){
    event.preventDefault();

    if ( validAttributes( $( '.feeling-attribute' ) ) ){
      $( '#current_feeling_2' ).hide();
      $( '#responsible' ).show();
      $('.responsible-attribute').children('input').slider();
      console.log("antes de enviar");
    };
  });





  $( '#submit' ).click(function( event ) {
    if ( !validAttributes( $( '.responsible-attribute' ) ) ) {
      event.preventDefault();
    }
  });

  $( '.action-attribute' ).change(function() {
    var result = $('#answer_No').prop('checked');

    if ( result ) {
      $( '#action_missing' ).show();
      $( '#action_missing' ).addClass('action-attribute');
    } else {
      $( '#action_missing' ).hide();
      $( '#action_missing' ).removeClass('action-attribute');
    }
  });

  $('input,textarea').focus(function () {
    $(this).data('placeholder', $(this).attr('placeholder'))
    .attr('placeholder', '');
  }).blur(function () {
    $(this).attr('placeholder', $(this).data('placeholder'));
  })

  $(".date").datepicker({
    startDate: "2015-05-08 00:00:00",
    format: "dd/mm/yyyy"
  });

});
